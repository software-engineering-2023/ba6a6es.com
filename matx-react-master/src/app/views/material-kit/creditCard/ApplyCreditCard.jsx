import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import ApplyCreditCardForm from "app/views/material-kit/forms/ApplyCreditCardForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ApplyCreditCard = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Form" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Apply Credit Card Form">
          <ApplyCreditCardForm />
        </SimpleCard>

       
      </Stack>
    </Container>
  );
};

export default ApplyCreditCard;
