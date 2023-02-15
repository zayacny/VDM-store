import './App.css';
import { Container, Box, CssBaseline } from '@mui/material';
import React from 'react';

import CommentsBoard from './components/CommentsBoard'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#282c34", height: "100vh" }}>
          <CommentsBoard/>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
