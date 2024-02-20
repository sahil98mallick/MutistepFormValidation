import { InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

const BirthSexForm = () => {
    return (
        <>
            <Box className="formdesign">
                <Box className="formintro">
                    <Typography variant="h3">What is Your Sex Birth?</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus!</Typography>
                </Box>
                <Box>
                    <form action="#" className="forminputs">
                        <Select
                            id="demo-simple-select"
                            value="Select Your Birth Sex"
                            className="inputtags"
                            label="Age"
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default BirthSexForm