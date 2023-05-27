import { Box, styled } from "@mui/system";
import { Breadcrumb ,SimpleCard} from "app/components";
import ViewAllNotifications from "./ViewAllNotifications";
import { Stack } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ViewAllNotificationsPage = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Form" }]} />
      </Box>
      <Stack spacing={3}>
        <SimpleCard title="Simple Form">
          <ViewAllNotifications />
        </SimpleCard>
        </Stack>
    </Container>
  );
};

export default ViewAllNotificationsPage;
