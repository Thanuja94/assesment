
import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';

const InvestmentPreferencesForm = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return (
        <body>
            <Box mt={2} ml={10} mr={10} sx={{ height: 200 }} style={{ backgroundColor: 'white' }}>
                <div style={{ display: "flex" }}>
                    <Typography align="left" style={{ color: 'grey' }} >
                        step 3 from 3

                    </Typography>
                    <Typography pl={30} style={{ color: 'gray' }}>
                        Lost or have trouble? <Button sx={{ width: 110 }} variant="text" style={{ textTransform: "none", color: '#35A0EE' }} endIcon={<ArrowForward />} >
                            Get help
                        </Button>
                    </Typography>
                </div>



                <div>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h4" align="left" pt={5} >
                        Investment Prefernces
                    </Typography>
                    <Typography style={{ color: 'gray' }}>
                        <p>
                            This will help us figure out what your investment options are so
                            <div>
                                that we can show you only possibly inttersting for deals
                            </div>
                        </p>
                    </Typography>

                </div>
            </Box>

            <Typography pl={10} sx={{ fontWeight: 'bold' }} variant="h6" align="left" pt={1} >
                What kind of real estate are you interested in?
            </Typography>


            <Box component="form" ml={10} mt={1} sx={{
                '& > :not(style)': { m: 1, width: '12ch', height: '15ch' }, display: 'flex',
                flexWrap: 'wrap',
            }} noValidate autoComplete="off">

                <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }} >
                    <Checkbox {...label} />
                    <Typography pl={2} pt={8} style={{ color: 'black' }} >
                        Single family
                    </Typography>
                </Box>

                <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                    <Checkbox {...label} />
                    <Typography pl={2} pt={5} style={{ color: 'black' }} >
                        Residential multifamily
                    </Typography>
                </Box>

                <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                    <Checkbox {...label} />
                    <Typography pl={2} pt= {5} style={{color:'black'}} >
               Commercial retail
          </Typography>
                </Box>

                <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                    <Checkbox {...label} />
                    <Typography pl={2} pt= {5} style={{color:'black'}} >
                    Commercial industrial
          </Typography>
                </Box>



            </Box>
            <Box component="form" ml={10} mt={1} sx={{
                '& > :not(style)': { m: 1, width: '12ch', height: '15ch' }, display: 'flex',
                flexWrap: 'wrap',
            }} noValidate autoComplete="off">

                <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                    <Checkbox {...label} />
                    <Typography pl={2} pt= {5} style={{color:'black'}} >
                    Commercial hospitality
          </Typography>
                </Box>

                <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                    <Checkbox {...label} />
                    <Typography pl={2} pt= {5} style={{color:'black'}} >
                    Commercial webhousing
          </Typography>
                </Box>

                <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                    <Checkbox {...label} />
                    <Typography pl={2} pt= {5} style={{color:'black'}} >
                    Commercial office
          </Typography>
                </Box>

                <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                    <Checkbox {...label} />
                    <Typography pl={2} pt= {8} style={{color:'black'}} >
                    Other
          </Typography>
                </Box>



            </Box>

            <Box mt={2} ml={10} mr={10} sx={{ height: 110 }} style={{ backgroundColor: 'white' }}>
                <Button sx={{ mt: 5, ml: 2 }} variant="text" size="small" style={{ textTransform: "none", color: '#35A0EE' }} startIcon={<ArrowBack />}>
                    Back to the previous page
                </Button>
                <Button sx={{ mt: 5, ml: 15, mr: 2 }} variant="contained" size="medium" style={{ textTransform: "none", backgroundColor: '#CFD8DC', color: '#35A0EE' }} >
                    Skip for now
                </Button>
                <Button sx={{ mt: 5, ml: 2 }} variant="contained" size="medium" style={{ textTransform: "none", backgroundColor: '#35A0EE' }}  >
                    Finish
                </Button>
            </Box>
        </body>
    );
}

export default InvestmentPreferencesForm