import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Tabs, Tab, Box, AppBar } from '@mui/material';
import EmotionTree from './components/EmotionTree';
import EmotionRecorder from './components/tabs/EmotionRecorder';
import EmotionHistory from './components/tabs/EmotionHistory';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ height: 'calc(100vh - 112px)', overflow: 'auto' }}>
      {value === index && children}
    </div>
  );
}

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [parentEmotions, setParentEmotions] = useState([]);

  const handleEmotionSelect = (emotion, parents = []) => {
    setSelectedEmotion(emotion);
    setParentEmotions(parents);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static" color="default">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Record Emotion" />
            <Tab label="History" />
          </Tabs>
        </AppBar>

        <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
          <Box sx={{ width: '50%', borderRight: 1, borderColor: 'divider' }}>
            <EmotionTree
              onEmotionSelect={handleEmotionSelect}
              selectedEmotion={selectedEmotion}
            />
          </Box>
          
          <Box sx={{ width: '50%', overflow: 'auto' }}>
            <TabPanel value={selectedTab} index={0}>
              <EmotionRecorder
                selectedEmotion={selectedEmotion}
                parentEmotions={parentEmotions}
              />
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
              <EmotionHistory />
            </TabPanel>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
