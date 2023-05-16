import React, { useState } from 'react';

function Form({ onSearch }) {
  const [name, setName] = useState('');
  const [paxNumber, setPaxNumber] = useState(1);
  const [travelType, setTravelType] = useState('');
  const [location, setLocation] = useState('');
  const [cashAmount, setCashAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ name, pax_number: paxNumber, travel_type: travelType, location, cash_amount: cashAmount });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" min="1" max="10" value={paxNumber} onChange={(e) => setPaxNumber(e.target.value)} required />
      <select value={travelType} onChange={(e) => setTravelType(e.target.value)} required>
        <option value="">Escolha o tipo de viagem</option>
        <option value="Familia">Familia</option>
        <option value="Aventura">Aventura</option>
        <option value="Gastronomia">Gastronomia</option>
        <option value="Descansar">Descansar</option>
      </select>
      <input type="text" placeholder="Onde você está agora" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <select value={cashAmount} onChange={(e) => setCashAmount(e.target.value)} required>
        <option value="">Quanto você quer gastar</option>
        <option value="Pouco">Pouco</option>
        <option value="Suficiente">Suficiente</option>
        <option value="Sem limites">Sem limites</option>
      </select>
      <button type="submit">Pesquisar ideias</button>
    </form>
  );
}

export default Form;
