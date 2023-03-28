import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const addClick = () => {
  axios.post('https://example.com/api/data')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
};

function AdminPanel() {
  const filmFields = [
    { id: 'name', label: 'Name' },
    { id: 'year', label: 'Year', type:'number' },
    { id: 'link', label: 'Link' },
    { id: 'imageLink', label: 'Image Link' },
    { id: 'director', label: 'Director' },
    { id: 'rating', label: 'Rating IMDB', type:'number' },
    { id: 'country', label: 'Country' },
    { id: 'genre', label: 'Genre' },
    { id: 'duration', label: 'Duration(min)', type:'number' },
    { id: 'storyline', label: 'Story line' },
  ];
  return (
    <div>
       <h1 style={{ textAlign: 'center' }}>Admin Panel</h1>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {filmFields.map((field) => (
        <TextField key={field.id} id={field.id} label={field.label} type={field.type}variant="outlined" />
      ))}
      <br></br>
      <Button onClick={addClick} variant="contained" color="success">
        Add film
      </Button>
    </Box>
    </div>
  )
}

export default AdminPanel