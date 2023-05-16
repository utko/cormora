import { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import TravelIdeas from './components/TravelIdeas';
import { Container } from '@mui/material';

function App() {
    const [travelData, setTravelData] = useState({});
    const [travelIdeas, setTravelIdeas] = useState('');

  const handleFormSubmit = async (data) => {
    setTravelData(data);
    try {
      const response = await axios.post('/api/openai', data);
      setTravelIdeas(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewSearch = () => {
    setTravelData({});
    setTravelIdeas('');
  };

  return (
    <Container maxWidth="md" style={{ padding: '2rem 0' }}>
      {!travelIdeas ? (
        <Form onFormSubmit={handleFormSubmit} />
      ) : (
        <TravelIdeas travelIdeas={travelIdeas} onNewSearch={handleNewSearch} />
      )}
    </Container>
  );
}

export default App;

