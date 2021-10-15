
import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import MenuItem from '@mui/material/MenuItem'


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
      <div>
        <Typography variant="h6" align="left" style={{ color: 'grey' }} >
          step 1 from 3
        </Typography>

      </div>

      <div>
        <Typography variant="h4" align="left" >
          Contact Details
        </Typography>
        <p>
          Welcome to united United Properties. we are glad to see you! Let's get
          <div>
            started by letting us know a little bit about you
          </div>


        </p>
      </div>

      <Box component="form" sx={{ '& > :not(style)': { m: 2, width: '25ch' }, }} noValidate autoComplete="off">


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
          <p style={{ width: '53ch' }}>
            We know you care about how your personal information is used and
            <div>
              shared, so we take your privacy seriously
            </div>


          </p>

        </div>


      </Box>
    </body>
  );
}

export default ContactForm