import { TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

const DateofBirthForm = () => {
    return (
        <>
            <Box className="formdesign">
                <Box className="formintro">
                    <Typography variant="h3">What is Your Birth date?</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus!</Typography>
                </Box>
                <Box>
                    <form action="#" className="forminputs">
                        <TextField type="date" variant="outlined"
                            placeholder="Enter Your Email ID" className="inputtags" />
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default DateofBirthForm