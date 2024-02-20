import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const WeightForm = () => {
    return (
        <>
            <Box className="formdesign">
                <Box className="formintro">
                    <Typography variant="h3">What is Your Weight (in KG)?</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus!</Typography>
                </Box>
                <Box>
                    <form action="#" className="forminputs">
                        <TextField type="text" variant="outlined" label="Your Weight"
                            placeholder="Enter Your weight" className="inputtags" />
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default WeightForm