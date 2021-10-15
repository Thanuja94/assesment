import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';


import ContactForm from './components/contact-form/ContactForm';
import Stepper from './components/stepper/Stepper';




function App() {
  return (

    <main>
      <Grid container spacing={2} style={{height:'100vh'}}>
        <Grid item xs={4} sm={4} md={4} lg={4} style={{backgroundColor:'#03A9F4'}}>
        <Typography variant="h5" align="left"  style={{color:'white'}} >
              UNITEDPROPERTIES
            </Typography>
            <div>
            <Stepper/>
            </div>
          
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} style={{backgroundColor:'white'}}>
          <ContactForm/>
          {/* <ContactForm/> */}
        </Grid>
      </Grid>
      {/* <div>
        <Container maxWidth="md">
          <div >
           
            
          </div>
          
          <Typography variant="h4" align="center" >
              Contact Details
            </Typography>
            <p>
              Welcome to united United Properties. we are glad to see you! Lets get <br></br>
              start

            </p>
          <div>

          </div>



        </Container>
      </div> */}
    </main>




  );
}

export default App;
