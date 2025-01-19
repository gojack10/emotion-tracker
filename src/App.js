import React, { useState } from 'react';
import EmotionTree from './components/EmotionTree';
import './App.css';

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const handleEmotionSelect = (name, data) => {
    setSelectedEmotion({ name, ...data });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Emotion Tracker</h1>
      </header>
      <main>
        <EmotionTree onEmotionSelect={handleEmotionSelect} />
        {selectedEmotion && (
          <div className="selected-emotion">
            <h3>Selected Emotion: {selectedEmotion.name}</h3>
            <p>{selectedEmotion.definition}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
