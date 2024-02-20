import { TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

const HeightForm = () => {
    return (
        <>
            <Box className="formdesign">
                <Box className="formintro">
                    <Typography variant="h3">What is Your Height (in CMS)?</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus!</Typography>
                </Box>
                <Box>
                    <form action="#" className="forminputs">
                        <TextField type="text" variant="outlined" label="Your Height"
                            placeholder="Enter Your height" className="inputtags" />
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default HeightForm