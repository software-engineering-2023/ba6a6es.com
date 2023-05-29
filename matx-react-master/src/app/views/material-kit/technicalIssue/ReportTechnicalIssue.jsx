import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import ReportTechnicalForm from "app/views/material-kit/forms/ReportTechnicalForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ReportTechnicalIssue = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            // { name: "Credit Cards", path: "" },
            { name: "Report" },
          ]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Report An Issue">
          <ReportTechnicalForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default ReportTechnicalIssue;
