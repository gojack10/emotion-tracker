import React, { useState, useEffect, useRef } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Paper,
  CircularProgress,
  Button,
  Stack,
  Alert,
  Snackbar
} from '@mui/material';
import { getEmotionHistory, exportData, importData } from '../../db/database';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const EmotionHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState({ text: '', severity: 'success' });
  const fileInputRef = useRef();

  const loadHistory = async () => {
    try {
      const records = await getEmotionHistory();
      setHistory(records);
    } catch (error) {
      console.error('Failed to load history:', error);
      setMessage({ text: 'Failed to load history', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const handleExport = async () => {
    try {
      await exportData();
      setMessage({ text: 'Data exported successfully', severity: 'success' });
    } catch (error) {
      console.error('Failed to export data:', error);
      setMessage({ text: 'Failed to export data', severity: 'error' });
    }
  };

  const handleImport = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      await importData(file);
      await loadHistory();
      setMessage({ text: 'Data imported successfully', severity: 'success' });
    } catch (error) {
      console.error('Failed to import data:', error);
      setMessage({ text: 'Failed to import data', severity: 'error' });
    } finally {
      setLoading(false);
      event.target.value = '';
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Emotion History
        </Typography>
        <Button
          variant="outlined"
          startIcon={<FileDownloadIcon />}
          onClick={handleExport}
        >
          Export Data
        </Button>
        <Button
          variant="outlined"
          startIcon={<FileUploadIcon />}
          onClick={() => fileInputRef.current?.click()}
        >
          Import Data
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept=".json"
          onChange={handleImport}
        />
      </Stack>

      <List>
        {history.map((record) => (
          <Paper key={record.id} sx={{ mb: 2, p: 2 }}>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <Typography variant="subtitle1" component="span">
                      {record.emotion}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="span"
                      sx={{ ml: 2 }}
                    >
                      {formatDate(record.timestamp)}
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    {record.parent_emotions && (
                      <Typography variant="body2" color="text.secondary">
                        Path: {JSON.parse(record.parent_emotions).join(' → ')}
                      </Typography>
                    )}
                    {record.reason && (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        Reason: {record.reason}
                      </Typography>
                    )}
                  </>
                }
              />
            </ListItem>
          </Paper>
        ))}
        {history.length === 0 && (
          <Typography variant="body1" color="text.secondary">
            No emotions recorded yet
          </Typography>
        )}
      </List>

      <Snackbar
        open={Boolean(message.text)}
        autoHideDuration={3000}
        onClose={() => setMessage({ text: '', severity: 'success' })}
      >
        <Alert severity={message.severity} sx={{ width: '100%' }}>
          {message.text}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EmotionHistory; 