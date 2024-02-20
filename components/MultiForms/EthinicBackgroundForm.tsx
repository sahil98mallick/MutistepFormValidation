import { Checkbox, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"

const EthinicBackgroundForm = () => {
    return (
        <>
            <Box className="formdesign">
                <Box className="formintro">
                    <Typography variant="h3">What is your Ethinic background?</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus!</Typography>
                </Box>
                <Box>
                    <form action="#" className="forminputs">
                        <Grid direction="row" spacing={5}>
                            <FormControlLabel control={<Checkbox />} label="Absoriginal or torres strait islander" />
                            <FormControlLabel control={<Checkbox />} label="Caucasian" />
                            <FormControlLabel control={<Checkbox />} label="Asian" />
                            <FormControlLabel control={<Checkbox />} label="Specific islander or maori" />
                            <FormControlLabel control={<Checkbox />} label="African" />
                            <FormControlLabel control={<Checkbox />} label="Middle Eastern" />
                            <FormControlLabel control={<Checkbox />} label="Not Listed" />
                        </Grid>
                    </form>
                </Box>
            </Box>
        </>
    )
}

export default EthinicBackgroundForm