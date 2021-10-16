
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
      <div>
        <Typography variant="h6" align="left" style={{ color: 'grey' }} >
          step 1 from 3
        </Typography>

      </div>
      <div>
        <Typography variant="h4" align="left" pt= {5} >
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
          <Typography variant="h5" align="left" >
            Privacy policy
          </Typography>
          <p style={{ width: '53ch',color:'gray' }}>
            We know you care about how your personal information is used and
            <div>
              shared, so we take your privacy seriously
            </div>


          </p>

        </div>
        <Button  variant="text"  size="small"  endIcon={<ArrowForward />}>
        Expand privacy policy
      </Button>

      </Box>

      <Box mt= {2} ml={10} mr={10} sx={{  height: 110 }} style={{backgroundColor:'red'}}>
      <Button  variant="text"  size="small"  startIcon={<ArrowBack />}>
        Back to the homepage
      </Button>
      <Button  variant="contained"  size="medium"  >
        skip for now
      </Button>
      <Button   variant="contained"  size="medium" endIcon={<ArrowForward />} >
       next step
      </Button>
      </Box>
    </body>
  );
}

export default ContactForm