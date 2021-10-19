
import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';

const InvestmentPlanContent= () => {
   


    return (
        <body>
            <Box mt={2} ml={10} mr={10} style={{ backgroundColor: 'white' }}>
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

                <Box component="form" mt={1} sx={{ '& > :not(style)': { m: 2, width: '25ch' }, }} noValidate autoComplete="off">

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




                </Box>

                <Box mt={0} sx={{ height: 110 }} >
                    <Typography sx={{ fontWeight: 'bold', width: 500, mt: 5 }} variant="h6" align="left" >
                        Are You an accredited investor?
                    </Typography>

                    <Button sx={{ mt: 1, ml: 5, mr: 2, width: 100 }} variant="outlined" size="medium" style={{ textTransform: "none", color: '#35A0EE' }} >
                        Yes
                    </Button>
                    <Button sx={{ mt: 1, ml: 2, width: 100 }} variant="outlined" size="medium" style={{ textTransform: "none", color: '#35A0EE' }}  >
                        No
                    </Button>

                </Box>
            </Box>
        </body>
    );
}

export default InvestmentPlanContent