import validationText from "@/lib/messages/validationText";
import { Box, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import * as Yup from 'yup';

const schema = Yup.object().shape({
    firstName: Yup.string().required(validationText.error.firstName),
    lastName: Yup.string().required(validationText.error.lastName)
});


const NameForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Box className="formdesign">
                <Box className="formintro">
                    <Typography variant="h3">Let's Start with Your Name</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                        voluptatibus!
                    </Typography>
                </Box>
                <Box className="forminputs">
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        rules={{ required: "First name is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="First Name"
                                variant="outlined"
                                error={!!error}
                                helperText={error ? error.message : null}
                                fullWidth
                                className="inputtags"
                                margin="normal"
                            />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Last name is required" }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Last Name"
                                variant="outlined"
                                error={!!error}
                                className="inputtags"
                                helperText={error ? error.message : null}
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </Box>
            </Box>
        </>
    );
};

export default NameForm;
