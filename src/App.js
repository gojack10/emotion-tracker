import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmotionTree from './components/EmotionTree';
import EmotionDetails from './components/EmotionDetails';
import EmotionHistory from './components/EmotionHistory';
import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [emotionHistory, setEmotionHistory] = useState(() => {
    const saved = localStorage.getItem('emotionHistory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('emotionHistory', JSON.stringify(emotionHistory));
  }, [emotionHistory]);

  const handleEmotionSelect = (name, data) => {
    setSelectedEmotion({ name, ...data });
  };

  const handleEmotionSave = (entry) => {
    setEmotionHistory(prev => [entry, ...prev]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Emotion Tracker</h1>
          </header>
          <main>
            <Routes>
              <Route 
                path="/" 
                element={
                  <EmotionTree 
                    onEmotionSelect={handleEmotionSelect} 
                    selectedEmotion={selectedEmotion}
                  />
                } 
              />
              <Route 
                path="/details" 
                element={
                  <EmotionDetails 
                    selectedEmotion={selectedEmotion}
                    onSave={handleEmotionSave}
                  />
                } 
              />
              <Route 
                path="/history" 
                element={
                  <EmotionHistory 
                    entries={emotionHistory}
                  />
                } 
              />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
