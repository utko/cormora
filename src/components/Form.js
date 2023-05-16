import React from 'react';
import { TextField, MenuItem, Button } from '@mui/material';

const Form = ({ onChange, onSubmit, values }) => {
  return (
    <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <TextField 
        label="Seu nome" 
        variant="outlined" 
        onChange={onChange('name')}
        value={values.name}
        style={{marginBottom: '20px'}}
      />

      <TextField
        select
        label="Quantas pessoas vão viajar"
        value={values.pax_number}
        onChange={onChange('pax_number')}
        style={{marginBottom: '20px'}}
      >
        {[...Array(10)].map((_, i) => (
          <MenuItem key={i} value={i + 1}>
            {i + 1}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Tipo de viagem"
        value={values.travel_type}
        onChange={onChange('travel_type')}
        style={{marginBottom: '20px'}}
      >
        {['Familia', 'Aventura', 'Gastronomia', 'Descansar'].map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>

      <TextField 
        label="Onde você está agora" 
        variant="outlined" 
        onChange={onChange('location')}
        value={values.location}
        style={{marginBottom: '20px'}}
      />

      <TextField
        select
        label="Quanto você quer gastar"
        value={values.cash_amount}
        onChange={onChange('cash_amount')}
        style={{marginBottom: '20px'}}
      >
        {['Pouco', 'Suficiente', 'Sem limites'].map((amount) => (
          <MenuItem key={amount} value={amount}>
            {amount}
          </MenuItem>
        ))}
      </TextField>

      <Button type="submit" variant="contained" color="primary">Pesquisar ideias</Button>
    </form>
  );
};

export default Form;