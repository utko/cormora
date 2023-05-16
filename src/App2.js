import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import { Container, Typography } from '@mui/material';

function App() {
  const [form, setForm] = useState({
    name: '',
    pax_number: '',
    travel_type: '',
    location: '',
    cash_amount: ''
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const prompt = `Hello, I'm ${form.name} and want to make a travel with ${form.pax_number} people. We're interested in a ${form.travel_type} type of trip. We're currently located in ${form.location} and we're planning to spend ${form.cash_amount} amount of money. We understand that you don't have real-time price information, but what we're looking for are three inspirational options for a great trip based on the information we've provided. We'd appreciate if the suggestions are in Portuguese.`;

try {
  const result = await axios.post('/api/chat', {
    prompts: [prompt],
    max_tokens: 150
  });

  setResponse(result.data.choices[0].text.trim());
  setLoading(false);
} catch (error) {
  console.error(error);
  setLoading(false);
}

// Render
return (
  <Container maxWidth="sm" style={{marginTop: '50px'}}>
    {response ? (
      <Typography variant="h4" align="center" paragraph>
        {response}
      </Typography>
    ) : (
      <Form onChange={handleChange} onSubmit={handleSubmit} values={form} />
    )}
  </Container>
);
}

export default App;
