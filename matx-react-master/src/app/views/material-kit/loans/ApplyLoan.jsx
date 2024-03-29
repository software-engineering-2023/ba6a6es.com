import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import ApplyLoanForm from "app/views/material-kit/forms/ApplyLoanForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ApplyLoan = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: "Loans", path: "" }, { name: "Apply" }]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Apply For Loan">
          <ApplyLoanForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default ApplyLoan;
