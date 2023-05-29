import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import CloseBankAccountForm from "app/views/material-kit/forms/CloseBankAccountForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const CloseBankAccount = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Bank Accounts", path: "" },
            { name: "Close An Account" },
          ]}
        />
      </Box>

      <SimpleCard title="Please Fill the following form.">
        <CloseBankAccountForm />
      </SimpleCard>
    </Container>
  );
};

export default CloseBankAccount;
