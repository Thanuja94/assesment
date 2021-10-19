
import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Box, width } from '@mui/system'
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';
import InputAdornment from '@mui/material/InputAdornment';
import Slider from '@mui/material/Slider';

const InvestmentPlanForm = () => {
    const marks = [
        {
            value: 10,
            label: '$10000',
        },
        {
            value: 30,
            label: '$50000',
        },
        {
            value: 50,
            label: '$100000',
        },
        {
            value: 70,
            label: '$200000',
        },
        {
            value: 85,
            label: '$500000',
        },
        {
            value: 100,
            label: '$1000000',
        },
    ];

    function valuetext(value) {
        return `$${value}`;


    }
    function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }

    return (
        <body>
            <Box mt={2} ml={10} mr={10} sx={{ height: 200 }} style={{ backgroundColor: 'white' }}>
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



                <div>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h4" align="left" pt={5} >
                        Investment Plans
                    </Typography>
                    <Typography style={{ color: 'gray' }}>
                        <p>
                            Let us know about your investement plans. This will help us get you
                            <div>
                                to the right expert expert who will help you further
                            </div>


                        </p>
                    </Typography>

                </div>
                <div style={{ display: "flex" }}>
                    <Typography sx={{ fontWeight: 'bold' }} align="left" >
                        How much are you planning to invest in this year?
                    </Typography>
                </div>
            </Box>




            <Box component="form" ml={10} mt={1} sx={{ '& > :not(style)': { m: 2, width: '25ch' }, }} style={{ backgroundColor: 'white' }} noValidate autoComplete="off">

                <TextField id="from" label="From" variant="standard" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }} />
                <TextField id="to" label="To" variant="standard" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }} />
                <div>

                </div>
                <div>
                    <Box sx={{ width: 540 }} >
                        <Slider
                            aria-label="Amonts"
                            defaultValue={10}
                            valueLabelFormat={valueLabelFormat}
                            getAriaValueText={valuetext}
                            step={null}
                            valueLabelDisplay="off"
                            marks={marks}
                        // valueLabelDisplay="on"
                        />
                    </Box>

                </div>
                <div>

                    <Typography sx={{ fontWeight: 'bold', width: 500, mt: 5 }} variant="h6" align="left" >
                        Are You an accredited investor?
                    </Typography>



                </div>



            </Box>
            <Box mt={0} ml={10} mr={10} sx={{ height: 110 }} style={{ backgroundColor: 'white' }}>

                <Button sx={{ mt: 1, ml: 5, mr: 2, width: 100 }} variant="outlined" size="medium" style={{ textTransform: "none", color: '#35A0EE' }} >
                    Yes
                </Button>
                <Button sx={{ mt: 1, ml: 2, width: 100 }} variant="outlined" size="medium" style={{ textTransform: "none", color: '#35A0EE' }}  >
                    No
                </Button>

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