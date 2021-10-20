import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import ContactForm from './components/contact-form/ContactForm';




function App() {
  return (

    <main>
      <Grid container spacing={2} style={{height:'100vh'}}>
            <ContactForm/>
      </Grid>

    </main>




  );
}

export default App;