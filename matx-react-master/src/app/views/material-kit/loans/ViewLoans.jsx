import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import ViewLoanTable from "app/views/material-kit/tables/ViewLoanTable";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ViewLoan = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Loans", path: "" }, { name: "View" }]}
        />
      </Box>

      <SimpleCard title="Loans">
        <ViewLoanTable />
      </SimpleCard>
    </Container>
  );
};

export default ViewLoan;
