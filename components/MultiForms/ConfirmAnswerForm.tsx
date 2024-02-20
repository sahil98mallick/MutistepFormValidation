import { Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"

const ConfirmAnswerForm = () => {
    return (
        <>
            <Box className="formdesign">
                <Box className="formintro">
                    <Typography variant="h3">What is Your Birth date?</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus!</Typography>
                </Box>
                <Box>
                    <form action="#" className="forminputs">
                        <Grid direction={"row"} spacing={5}>
                            <Grid direction={"column"} spacing={3}>
                                <Typography variant="h6">Date or Birth: 10-Feb-2021</Typography>
                                <Typography variant="h6">Date or Birth: 10-Feb-2021</Typography>
                                <Typography variant="h6">Date or Birth: 10-Feb-2021</Typography>
                            </Grid>
                            <Grid direction={"column"} spacing={3}>
                                <Typography variant="h6">Date or Birth: 10-Feb-2021</Typography>
                                <Typography variant="h6">Date or Birth: 10-Feb-2021</Typography>
                                <Typography variant="h6">Date or Birth: 10-Feb-2021</Typography>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default ConfirmAnswerForm