import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';
import Results from './Results';

function App() {
  const [results, setResults] = useState(null);

  const handleSearch = async (formData) => {
    try {
      const response = await axios.post('/api/get-travel-ideas', formData);
      setResults(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = () => {
    setResults(null);
  };

  return (
    <div className="App">
      {results ? (
        <Results data={results} onReset={handleReset} />
      ) : (
        <Form onSearch={handleSearch} />
      )}
    </div>
  );
}

export default App;
