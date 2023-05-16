import { Button, TextField, Select, MenuItem, Typography } from '@mui/material';

function Form({ onFormSubmit }) {
    // ... previous state declarations and handleChange functions

    return (
        <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: 'auto' }}>
            <Typography variant="h5">Travel Planner</Typography>
            <TextField label="Seu nome" variant="outlined" name="name" value={name} onChange={handleNameChange} required />
            <TextField label="Quantas pessoas vão viajar" variant="outlined" name="pax_number" value={pax_number} onChange={handlePaxNumberChange} type="number" inputProps={{ min: 1, max: 10 }} required />
            <Select label="Tipo de viagem" variant="outlined" name="travel_type" value={travel_type} onChange={handleTravelTypeChange} required>
                <MenuItem value="Familia">Familia</MenuItem>
                <MenuItem value="Aventura">Aventura</MenuItem>
                <MenuItem value="Gastronomia">Gastronomia</MenuItem>
                <MenuItem value="Descançar">Descançar</MenuItem>
            </Select>
            <TextField label="Onde você está agora" variant="outlined" name="location" value={location} onChange={handleLocationChange} required />
            <Select label="Quanto você quer gastar" variant="outlined" name="cash_amount" value={cash_amount} onChange={handleCashAmountChange} required>
                <MenuItem value="pouco">Pouco</MenuItem>
                <MenuItem value="suficiente">Suficiente</MenuItem>
                <MenuItem value="sem limites">Sem limites</MenuItem>
            </Select>
            <Button type="submit" variant="contained">Pesquisar ideias</Button>
        </form>
    );
}

export default Form;
