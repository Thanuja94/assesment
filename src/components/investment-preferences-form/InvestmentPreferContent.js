
import React, { useEffect, useState } from "react";
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Checkbox from '@mui/material/Checkbox';

const InvestmentPreferContent= () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    return (
        <body>
            <Box mt={2} ml={10} mr={10} style={{ backgroundColor: 'white' }}>
                <div>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h4" align="left"  >
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
                <Typography sx={{ fontWeight: 'bold' }} variant="h6" align="left" pt={1} >
                    What kind of real estate are you interested in?
                </Typography>

                <Box component="form" mt={1} sx={{
                    '& > :not(style)': { m: 1, width: '12ch', height: '15ch' }, display: 'flex',
                    flexWrap: 'wrap'
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
                        <Typography pl={2} pt={5} style={{ color: 'black' }} >
                            Commercial retail
                        </Typography>
                    </Box>

                    <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                        <Checkbox {...label} />
                        <Typography pl={2} pt={5} style={{ color: 'black' }} >
                            Commercial industrial
                        </Typography>
                    </Box>



                </Box>
                <Box component="form" mt={1} sx={{
                    '& > :not(style)': { m: 1, width: '12ch', height: '15ch' }, display: 'flex',
                    flexWrap: 'wrap'
                }} noValidate autoComplete="off">

                    <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                        <Checkbox {...label} />
                        <Typography pl={2} pt={5} style={{ color: 'black' }} >
                            Commercial hospitality
                        </Typography>
                    </Box>

                    <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                        <Checkbox {...label} />
                        <Typography pl={2} pt={5} style={{ color: 'black' }} >
                            Commercial webhousing
                        </Typography>
                    </Box>

                    <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                        <Checkbox {...label} />
                        <Typography pl={2} pt={5} style={{ color: 'black' }} >
                            Commercial office
                        </Typography>
                    </Box>

                    <Box mt={2} ml={10} mr={10} sx={{ border: 2, borderColor: '#35A0EE', borderRadius: 2 }}>
                        <Checkbox {...label} />
                        <Typography pl={2} pt={8} style={{ color: 'black' }} >
                            Other
                        </Typography>
                    </Box>



                </Box>

            </Box>
        </body>
    );
}

export default InvestmentPreferContent