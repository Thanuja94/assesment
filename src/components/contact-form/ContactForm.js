
import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ContactFormContent from './ContactFormContent';
import InvestmentPlanContent from '../investment-plan-form/InvestmentPlanContent';
import InvestmentPreferContent from '../investment-preferences-form/InvestmentPreferContent';




const ContactForm = () => {
  
  // const onClickNextStep = () => this.props.history.push("/InvestmentPlanForm");

  return (
    <body>
      <Box mt={2} ml={10} mr={10} sx={{ height: 50 }} >
        <div style={{ display: "flex" }}>
          <Typography align="left" style={{ color: 'grey' }} >
            step 1 from 3

          </Typography>
          <Typography pl={30} style={{ color: 'gray' }}>
            Lost or have trouble? <Button sx={{ width: 110 }} variant="text" style={{ textTransform: "none", color: '#35A0EE' }} endIcon={<ArrowForward />} >
              Get help
            </Button>
          </Typography>
        </div>




      </Box>
        <Box>
        {/* <ContactFormContent/> */}
        {/* <InvestmentPlanContent/> */}
        <InvestmentPreferContent/>
        </Box>
      




      <Box mt={2} ml={10} mr={10} sx={{ height: 110 }} style={{ backgroundColor: 'white' }}>
        <Button sx={{ mt: 5, ml: 2 }} variant="text" size="small" style={{ textTransform: "none", color: '#35A0EE' }} startIcon={<ArrowBack />}>
          Back to the homepage
        </Button>
        <Button sx={{ mt: 5, ml: 15, mr: 2 }} variant="contained" size="medium" style={{ textTransform: "none", backgroundColor: '#CFD8DC', color: '#35A0EE' }} >
          Skip for now
        </Button>
        <Button sx={{ mt: 5, ml: 2 }} variant="contained" size="medium" style={{ textTransform: "none", backgroundColor: '#35A0EE' }} endIcon={<ArrowForward />} >
          Next step
        </Button>
      </Box>
    </body>
  );
}

export default ContactForm