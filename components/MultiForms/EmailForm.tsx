import { emailRegex } from "@/lib/regex";
import { Box, TextField, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import * as Yup from 'yup';


const schema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .email("Entered value does not match email format")
        .required("Email is required")
        .matches(emailRegex, "Entered value does not match email format"),
});

const EmailForm = () => {
    const { control } = useFormContext();

    return (
        <>
            <Box className="formdesign">
                <Box className="formintro">
                    <Typography variant="h3">Please Enter Your Email Address</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                        voluptatibus!
                    </Typography>
                </Box>
                <Box className="forminputs">
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: emailRegex,
                                message: "Entered value does not match email format",
                            },
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                label="Email"
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

export default EmailForm;
