import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@material-ui/core';

import Form from './components/Form';

function App() {
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [answer, setAnswer] = useState(null);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      destination: destination,
      budget: budget
    };

    try {
      const response = await axios.post('/api/get-travel-ideas', dataToSend);
      setAnswer(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Travel Ideas Generator
      </Typography>
      <Form
        destination={destination}
        onDestinationChange={handleDestinationChange}
        budget={budget}
        onBudgetChange={handleBudgetChange}
        onSubmit={handleSubmit}
      />
      {answer && (
        <Typography variant="h6" component="p" align="center" gutterBottom>
          {answer}
        </Typography>
      )}
    </Container>
  );
}

export default App;
