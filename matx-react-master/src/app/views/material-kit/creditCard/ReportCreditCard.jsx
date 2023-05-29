import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import ReportCreditCardForm from "app/views/material-kit/forms/ReportCreditCardForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ReportCreditCard = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Credit Cards", path: "" },
            { name: "Report" },
          ]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Report Credit Card">
          <ReportCreditCardForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default ReportCreditCard;
