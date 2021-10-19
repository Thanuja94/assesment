
import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'

import { Box, width } from '@mui/system'
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';


const InvestmentPlanForm = () => {
    
    return (
        <body>
            <Box mt={2} ml={10} mr={10} sx={{ height: 50 }} style={{ backgroundColor: 'white' }}>
                <div style={{ display: "flex" }}>
                    <Typography align="left" style={{ color: 'grey' }} >
                        step 2 from 3

                    </Typography>
                    <Typography pl={30} style={{ color: 'gray' }}>
                        Lost or have trouble? <Button sx={{ width: 110 }} variant="text" style={{ textTransform: "none", color: '#35A0EE' }} endIcon={<ArrowForward />} >
                            Get help
                        </Button>
                    </Typography>
                </div>




            </Box>
            







            <Box mt={7} ml={10} mr={10} sx={{ height: 110 }} style={{ backgroundColor: 'white' }}>
                <Button sx={{ mt: 5, ml: 2 }} variant="text" size="small" style={{ textTransform: "none", color: '#35A0EE' }} startIcon={<ArrowBack />}>
                    Back to the previous step
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

export default InvestmentPlanForm