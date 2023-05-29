import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import ViewCreditCardTable from "app/views/material-kit/tables/ViewCreditCardTable";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ViewPayCreditCard = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Credit Cards", path: "" }, { name: "View" }]}
        />
      </Box>

      <SimpleCard title="Credit Cards">
        <ViewCreditCardTable />
      </SimpleCard>
    </Container>
  );
};

export default ViewPayCreditCard;
