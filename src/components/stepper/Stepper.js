
import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';



const StepperNew = () => {
    const steps = [
        {
          label: 'Contact Details',
          
         
        },
        {
          label: 'Investment plans',
          
        },
        {
          label: 'Investment preferences',
          
        },
      ];

  const [activeStep, setActiveStep] = React.useState(0);

  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);

  };

  return (
    <body>
        <Box  mt= {20} ml={10} mr={10} sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel 
              optional={
                index === 2 ? (
                  <Typography variant="caption"> </Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  {/* <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button> */}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>

    <div>
      <Box mt= {15} ml={10} mr={10} sx={{  height: 175 }} style={{backgroundColor:'white' ,borderRadius: 4}}>
          <Typography pl={2} pt= {2} style={{color:'gray'}} >
              We care about your time, that's why we created a 3-stage onboarding that will not a take more than 5 miniuts to complete.
          </Typography>
      </Box>
    </div>
    </body>
    

    
  );
}

export default StepperNew