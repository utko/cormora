import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import TravelIdeas from './components/TravelIdeas';

function App() {
  const [travelIdeas, setTravelIdeas] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (formData) => {
    setLoading(true);
    const prompt = `Hello, I'm ${formData.name} and want to make a travel with ${formData.pax_number} to somewhere. The ideia of for this travel is that we like a trip base in ${formData.travel_type}.  Today im located in ${formData.location} and about the how much i want to expend the base is ${formData.cash_amount}. I know you dont have information in realtime about the prices, but what I want is 3 options for a good trip with the informations that i provide.`;

    const openaiURL = "https://api.openai.com/v4/engines/davinci-codex/completions";

    try {
      const response = await axios.post(openaiURL, {
        prompt,
        max_tokens: 150,
        temperature: 0.7
      }, {
        headers: {
          'Authorization': `sk-IZdVP95PzoIvVFAtHrvET3BlbkFJXCOgczy2NPz92SNoYL9Nn`,
          'Content-Type': 'application/json'
        }
      });

      const generatedIdeas = response.data.choices[0].text.trim();
      setTravelIdeas(generatedIdeas);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const handleReset = () => {
    setTravelIdeas(null);
  };

  return (
    <div className="App">
      {!travelIdeas ? (
        <Form onSearch={handleSearch} />
      ) : (
        <TravelIdeas ideas={travelIdeas} loading={loading} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
