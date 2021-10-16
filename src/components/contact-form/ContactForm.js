
import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';

const ContactForm = () => {
  const countries = [
    {
      value: 'Sri Lanka',
      label: 'Sri Lanka',
    },
    {
      value: 'India',
      label: 'India',
    },
    {
      value: 'Ukraine',
      label: 'Ukraine',
    },
    {
      value: 'Japan',
      label: 'Japan',
    },
  ];

  const [country, setCountry] = React.useState('Sri Lanka');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <body>
      <Box mt= {2} ml={10} mr={10} sx={{  height: 200 }} style={{backgroundColor:'white'}}>
      <div style={{display:"flex"}}> 
      <Typography  align="left" style={{ color: 'grey' }} >
          step 1 from 3
          
        </Typography>
        <Typography pl={30}   style={{color:'gray'}}>
            Lost or have trouble? <Button sx={{  width: 110 }} variant="text"   style={{textTransform: "none", color: '#03A9F4'}} endIcon={<ArrowForward />} >
        Get help
      </Button>
          </Typography>
      </div>
        

      
      <div>
        <Typography sx={{ fontWeight: 'bold' }} variant="h4" align="left" pt= {5} >
          Contact Details
        </Typography>
        <Typography style={{color:'gray'}}>
        <p>
          Welcome to united United Properties. we are glad to see you! Let's get
          <div>
            started by letting us know a little bit about you
          </div>


        </p>
        </Typography>
        
      </div>
      </Box>
      

      

      <Box component="form" ml={10} mt={1} sx={{ '& > :not(style)': { m: 2, width: '25ch' }, }} noValidate autoComplete="off">


        <TextField id="f-name" label="Full name" variant="standard" />
        <TextField id="contact-no" label="Contact Number" variant="standard" />
        <div>
          <TextField fullWidth id="email" label="Email address" variant="standard" style={{ width: '53ch' }} />
        </div>
        <div>
          <TextField fullWidth
            id="select-country"
            select label="Country"
            value={country} onChange={handleChange} SelectProps={{ native: true, }} variant="standard" style={{ width: '53ch' }} >
            {countries.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>



        <div>
          <Typography sx={{ fontWeight: 'bold' }} variant="h5" align="left" >
            Privacy policy
          </Typography>
          <p style={{ width: '53ch',color:'gray' }}>
            We know you care about how your personal information is used and
            <div>
              shared, so we take your privacy seriously
            </div>


          </p>

        </div>
        <Button sx={{  width: 110 }} variant="text"   style={{textTransform: "none", color: '#03A9F4'}} endIcon={<ArrowForward />} >
        Expand privacy policy
      </Button>

      </Box>

      <Box mt= {2} ml={10} mr={10} sx={{  height: 110 }} style={{backgroundColor:'white'}}>
      <Button sx={{ mt: 5, ml: 2 }}  variant="text"  size="small" style={{textTransform: "none", color: '#03A9F4'}} startIcon={<ArrowBack />}>
        Back to the homepage
      </Button>
      <Button sx={{ mt: 5, ml: 15 , mr: 2 }} variant="contained"  size="medium"  style={{textTransform: "none" , backgroundColor:'#CFD8DC', color: '#03A9F4' }} >
        Skip for now
      </Button>
      <Button  sx={{ mt: 5, ml: 2 }}  variant="contained"  size="medium" style={{textTransform: "none", backgroundColor:'#03A9F4'}} endIcon={<ArrowForward />} >
       Next step
      </Button>
      </Box>
    </body>
  );
}

export default ContactForm