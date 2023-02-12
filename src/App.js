import './App.css';
import { Container, Button, Box, CssBaseline } from '@mui/material';
import React from 'react';

import CommentsBoard from './components/CommentsBoard'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Button variant="contained">Hello World</Button>
          <CommentsBoard/>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
