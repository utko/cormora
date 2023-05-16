import React from 'react';
import { Button, Typography } from '@mui/material';

function TravelIdeas({ travelIdeas, onNewSearch }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
      <Typography variant="h5">Travel Ideas</Typography>
      <Typography variant="body1">{travelIdeas}</Typography>
      <Button variant="contained" onClick={onNewSearch}>Start Again</Button>
    </div>
  );
}

export default TravelIdeas;
