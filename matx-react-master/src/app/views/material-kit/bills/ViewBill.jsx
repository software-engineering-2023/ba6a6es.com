import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import ViewBillTable from "app/views/material-kit/tables/ViewBillTable";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ViewPayBill = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Bills", path: "" }, { name: "View" }]}
        />
      </Box>

      <SimpleCard title="Bills">
        <ViewBillTable />
      </SimpleCard>
    </Container>
  );
};

export default ViewPayBill;
