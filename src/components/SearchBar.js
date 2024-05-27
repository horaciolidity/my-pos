import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <TextField
        label="Buscar Producto"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Buscar
      </Button>
    </div>
  );
}

export default SearchBar;
