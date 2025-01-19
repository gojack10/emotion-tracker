import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Snackbar } from '@mui/material';
import { addEmotionRecord } from '../../db/database';

const EmotionRecorder = ({ selectedEmotion, parentEmotions }) => {
  const [reason, setReason] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = async () => {
    if (selectedEmotion) {
      try {
        await addEmotionRecord(selectedEmotion, parentEmotions, reason);
        setReason('');
        setSnackbarOpen(true);
      } catch (error) {
        console.error('Failed to save emotion:', error);
      }
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Record Emotion
      </Typography>
      {selectedEmotion ? (
        <>
          <Typography variant="body1" gutterBottom>
            Selected Emotion: {selectedEmotion}
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            label="Why do you feel this way?"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Record Emotion
          </Button>
        </>
      ) : (
        <Typography>Please select an emotion from the tree</Typography>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Emotion recorded successfully"
      />
    </Box>
  );
};

export default EmotionRecorder; 