import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import OpenBankAccountForm from "app/views/material-kit/forms/OpenBankAccountForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const OpenBankAccount = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Bank Accounts", path: "" },
            { name: "Open A New Account" },
          ]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Please fill the following form.">
          <OpenBankAccountForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default OpenBankAccount;
