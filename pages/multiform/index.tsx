
import MainForm from "@/components/MultiForms/MainForm";
import Wrapper from "@/layout/wrapper/Wrapper";
import { Box, Card } from "@mui/material";
const index = () => {

    return (
        <>
            <Wrapper>
                <Box className="multiform">
                    <Card className="multiformsteper">
                        <MainForm />
                    </Card>
                </Box>
            </Wrapper>
        </>
    )
}

export default index