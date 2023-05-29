import { Box, styled } from "@mui/system";
import { Breadcrumb ,SimpleCard} from "app/components";
import ViewAllNotifications from "./ViewAllNotifications";
import { Stack } from "@mui/material";
import NotificationSpecificTable from "app/views/material-kit/tables/NotificationSpecificTable";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ViewSpecificNotification = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Notification Details", path: "/material" },]} />
      </Box>
      <Stack spacing={3}>
        <SimpleCard title="Bill Reminder">
          <NotificationSpecificTable />
        </SimpleCard>
        </Stack>
    </Container>
  );
};

export default ViewSpecificNotification;
