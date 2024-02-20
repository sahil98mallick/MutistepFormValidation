import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

const ReviewForm = () => {
    const { getValues } = useFormContext();
    const values = getValues();

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Review Your Details
            </Typography>
            <List disablePadding>
                <ListItem>
                    <ListItemText primary="First Name" secondary={values.firstName} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Last Name" secondary={values.lastName} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Email" secondary={values.email} />
                </ListItem>
            </List>
        </>
    );
};

export default ReviewForm;
