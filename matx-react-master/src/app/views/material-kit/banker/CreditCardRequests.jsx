import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import CreditCardRequestsTable from "app/views/material-kit/tables/CreditCardRequestsTable";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const CreditCardRequests = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Table" }]} />
      </Box>

      <SimpleCard title="Simple Table">
        <CreditCardRequestsTable />
      </SimpleCard>

      
    </Container>
  );
};

export default CreditCardRequests;
