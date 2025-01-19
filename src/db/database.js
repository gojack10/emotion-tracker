const DB_NAME = 'emotionsDB';
const DB_VERSION = 1;
const STORE_NAME = 'emotionRecords';

let db = null;

const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        });
        store.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });
};

export const addEmotionRecord = async (emotion, parentEmotions, reason) => {
  if (!db) await initDB();
  
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    const record = {
      emotion,
      parent_emotions: JSON.stringify(parentEmotions),
      reason,
      timestamp: new Date().toISOString()
    };

    const request = store.add(record);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const getEmotionHistory = async () => {
  if (!db) await initDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index('timestamp');
    
    const request = index.openCursor(null, 'prev');
    const results = [];

    request.onsuccess = () => {
      const cursor = request.result;
      if (cursor) {
        results.push(cursor.value);
        cursor.continue();
      } else {
        resolve(results);
      }
    };

    request.onerror = () => reject(request.error);
  });
};

export const exportData = async () => {
  if (!db) await initDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      const data = request.result;
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `emotion-records-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      resolve();
    };

    request.onerror = () => reject(request.error);
  });
};

export const importData = async (file) => {
  if (!db) await initDB();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = async (e) => {
      try {
        const records = JSON.parse(e.target.result);
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        
        // Clear existing records
        await new Promise((res, rej) => {
          const clearRequest = store.clear();
          clearRequest.onsuccess = () => res();
          clearRequest.onerror = () => rej(clearRequest.error);
        });

        // Import new records
        for (const record of records) {
          await new Promise((res, rej) => {
            const addRequest = store.add(record);
            addRequest.onsuccess = () => res();
            addRequest.onerror = () => rej(addRequest.error);
          });
        }
        
        resolve();
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
};

// Initialize the database when the module loads
initDB().catch(console.error); 