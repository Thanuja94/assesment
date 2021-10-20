import React, {useEffect, useState} from "react";
import {Grid, Typography} from '@mui/material'
import {TextField} from '@mui/material'
import {Box} from '@mui/system'
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Stepper from '@mui/material/Stepper';
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ContactFormContent from "./ContactFormContent";
import InvestmentPlanContent from "../investment-plan-form/InvestmentPlanContent";
import InvestmentPreferContent from "../investment-preferences-form/InvestmentPreferContent";


const ContactForm = () => {

    const steps = [
        {
            label: 'Contact Details',
            description: 'We care about your time, that\'s why we created a 3-stage onboarding that will not a take more than 5 miniuts to complete.',
            component: <ContactFormContent/>

        },
        {
            label: 'Investment plans',
            description: 'Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advise for free.',
            component: <InvestmentPlanContent/>
        },
        {
            label: 'Investment preferences',
            description: 'United properties is about fast & easy searching, buying, selling and investing ever - online, with an expert by our side',
            component: <InvestmentPreferContent/>

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

    // const onClickNextStep = () => this.props.history.push("/InvestmentPlanForm");

    return (

        <>
            <Grid item xs={4} sm={4} md={4} lg={4} style={{backgroundColor: '#35A0EE'}}>
                <Typography mt={2} ml={10} sx={{fontFamily: 'Monospace'}} variant="h5" align="left"
                            style={{color: 'white'}}>
                    UNITEDPROPERTIES
                </Typography>
                <Box mt={20} ml={10} mr={10} sx={{maxWidth: 400}}>
                    <Stepper activeStep={activeStep} orientation="vertical">
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
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <Box mt={15} ml={10} mr={10} sx={{height: 175}} style={{backgroundColor: 'white', borderRadius: 4}}>
                    <Typography pl={2} pt={2} sx={{ fontStyle: 'italic', textAlign: 'left' }} style={{color: '#A4AEB4'}}>
                        {steps[activeStep].description}
                    </Typography>
                </Box>

            </Grid>
            <Grid item xs={8} sm={8} md={8} lg={8} style={{backgroundColor: 'white'}}>

                <Box mt={2} ml={10} mr={10} sx={{height: 50}}>
                    <div style={{display: "flex"}}>
                        <Typography align="left" style={{color: 'grey'}}>
                            step {activeStep + 1} from {steps.length}

                        </Typography>
                        <Typography pl={30} style={{color: 'gray'}}>
                            Lost or have trouble? <Button sx={{width: 110}} variant="text"
                                                          style={{textTransform: "none", color: '#35A0EE'}}
                                                          endIcon={<ArrowForward/>}>
                            Get help
                        </Button>
                        </Typography>
                    </div>


                </Box>
                <Box>
                    {steps[activeStep].component}
                </Box>

                <Box mt={2} ml={10} mr={10} sx={{height: 110}} style={{backgroundColor: 'white'}}>
                    {activeStep == 0 ? (
                        <Button sx={{mt: 5, ml: 2}} variant="text" size="small"
                                style={{textTransform: "none", color: '#35A0EE'}} startIcon={<ArrowBack/>}>
                            Back to the homepage
                        </Button>
                    ) : (
                        <Button sx={{mt: 5, ml: 2}} variant="text" size="small"
                                onClick={handleBack}
                                style={{textTransform: "none", color: '#35A0EE'}} startIcon={<ArrowBack/>}>
                            Back to the previous
                        </Button>
                    )}
                    {activeStep != steps.length - 1 ? (
                        <>
                            <Button sx={{mt: 5, ml: 15, mr: 2}} variant="contained" size="medium"
                                    onClick={handleNext}
                                    style={{textTransform: "none", backgroundColor: '#CFD8DC', color: '#35A0EE'}}>
                                Skip for now
                            </Button>
                            <Button sx={{mt: 5, ml: 2}} variant="contained" size="medium"
                                    onClick={handleNext}
                                    style={{textTransform: "none", backgroundColor: '#35A0EE'}}
                                    endIcon={<ArrowForward/>}>
                                Next step
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button sx={{mt: 5, ml: 15, mr: 2}} variant="contained" size="medium"
                                    style={{textTransform: "none", backgroundColor: '#CFD8DC', color: '#35A0EE'}}>
                                Skip for now
                            </Button>
                            <Button sx={{mt: 5, ml: 2}} variant="contained" size="medium"
                                    style={{textTransform: "none", backgroundColor: '#35A0EE'}}>
                               Finish
                            </Button>
                        </>
                    )}
                </Box>


            </Grid>
        </>
    );
}

export default ContactForm