import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  Divider,
  Button,
  Breadcrumbs,
  Link
} from '@mui/material';
import moment from 'moment';

const EmotionHistory = ({ entries = [] }) => {
  const navigate = useNavigate();

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">Emotion History</Typography>
        <Button variant="outlined" onClick={() => navigate('/')}>
          Back to Emotions
        </Button>
      </Box>

      <List>
        {entries.length === 0 ? (
          <Typography color="text.secondary" sx={{ textAlign: 'center', py: 3 }}>
            No emotions recorded yet
          </Typography>
        ) : (
          entries.map((entry, index) => (
            <React.Fragment key={index}>
              {index > 0 && <Divider />}
              <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', py: 2 }}>
                <Box sx={{ width: '100%', mb: 1 }}>
                  <Typography variant="subtitle1" component="div" gutterBottom>
                    {entry.emotion}
                  </Typography>
                  <Breadcrumbs aria-label="emotion hierarchy" sx={{ mb: 1 }}>
                    {entry.hierarchy.map((item, idx) => (
                      <Link
                        key={idx}
                        color="inherit"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {item}
                      </Link>
                    ))}
                  </Breadcrumbs>
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {moment(entry.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
                </Typography>
                <Typography variant="body1">
                  {entry.reason}
                </Typography>
              </ListItem>
            </React.Fragment>
          ))
        )}
      </List>
    </Paper>
  );
};

export default EmotionHistory; 