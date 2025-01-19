import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Breadcrumbs,
  Link 
} from '@mui/material';

const EmotionDetails = ({ selectedEmotion, onSave }) => {
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const entry = {
      emotion: selectedEmotion.name,
      hierarchy: selectedEmotion.hierarchy,
      timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      reason: reason
    };
    onSave(entry);
    navigate('/history');
  };

  if (!selectedEmotion) {
    return <Typography>No emotion selected</Typography>;
  }

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: 'auto', mt: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Selected Emotion: {selectedEmotion.name}
        </Typography>
        <Breadcrumbs aria-label="emotion hierarchy">
          {selectedEmotion.hierarchy.map((item, index) => (
            <Link
              key={index}
              color="inherit"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              {item}
            </Link>
          ))}
        </Breadcrumbs>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Date & Time: {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {selectedEmotion.definition}
        </Typography>
      </Box>

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Why do you feel this way?"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
        <Button variant="outlined" onClick={() => navigate('/')}>
          Back
        </Button>
        <Button 
          variant="contained" 
          onClick={handleSubmit}
          disabled={!reason.trim()}
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
};

export default EmotionDetails; 