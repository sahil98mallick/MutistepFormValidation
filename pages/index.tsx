import Wrapper from "@/layout/wrapper/Wrapper";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const gotopage = () => {
    router.push("/multiform")
  }
  return (
    <Wrapper>
      <Box className="homecontainer">
        <Box className="main-contents">
          <Box className="contents">
            <Typography variant="h2" className="welcomemessage">Welcome to Your Consult</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quia expedita veritatis est officiis atque non neque vel molestiae, perspiciatis repellendus harum explicabo optio vero deserunt voluptatum minima, debitis consectetur.
            </Typography>
            <Button variant="contained" color="primary" size="large" onClick={gotopage}>Next</Button>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
}
