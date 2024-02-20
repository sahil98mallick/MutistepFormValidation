import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import EmailForm from "./EmailForm";
import NameForm from "./NameForm";
import ReviewForm from "./ReviewForm";
const steps = ["Name Details", "Email Details", "Review & Submit"];
const MainForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
    });

    const handleNext = async () => {
        const isValid = await methods.trigger();
        if (isValid) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = (data: any) => {
        if (activeStep !== steps.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        console.log(data);
        localStorage.setItem("formdata", JSON.stringify(data))
    };

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <NameForm />;
            case 1:
                return <EmailForm />;
            case 2:
                return <ReviewForm />;
            default:
                return null;
        }
    };

    return (
        <>
            <Box className="multiformstepper">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleSubmit)}>
                        {getStepContent(activeStep)}
                        <Box sx={{ display: "flex", justifyContent: "center", }}>
                            {activeStep > 0 && (
                                <Button variant="contained" onClick={handleBack} sx={{ mr: 1 }}>
                                    Back
                                </Button>
                            )}
                            {activeStep !== steps.length - 1 ? (
                                <Button variant="contained" type="submit" size="large">
                                    Next
                                </Button>
                            ) : (
                                <Button variant="contained" type="submit" size="large">
                                    Submit
                                </Button>
                            )}
                        </Box>
                    </form>
                </FormProvider>
            </Box>
        </>
    )
}

export default MainForm