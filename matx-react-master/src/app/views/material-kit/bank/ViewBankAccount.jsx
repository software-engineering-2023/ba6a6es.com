import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import ViewBankAccountTable from "app/views/material-kit/tables/ViewBankAccountTable";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ViewBankAccount = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Bank Accounts", path: "" },
            { name: "View" },
          ]}
        />
      </Box>

      <SimpleCard title="Your Accounts">
        <ViewBankAccountTable />
      </SimpleCard>
    </Container>
  );
};

export default ViewBankAccount;
