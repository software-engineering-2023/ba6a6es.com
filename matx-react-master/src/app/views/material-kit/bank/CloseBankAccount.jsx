import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import CloseBankAccountTable from "app/views/material-kit/tables/CloseBankAccountTable";

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

      <SimpleCard title="Close Bank Account Table">
        <CloseBankAccountTable />
      </SimpleCard>
    </Container>
  );
};

export default CloseBankAccount;
