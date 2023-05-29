import { Box, styled } from "@mui/system";
import { Breadcrumb ,SimpleCard} from "app/components";
import ViewAllNotifications from "./ViewAllNotifications";
import { Stack } from "@mui/material";
import TransactionSpecificTable from "app/views/material-kit/tables/TransactionSpecificTable";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ViewSpecificTransaction = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Notification Details", path: "/material" },]} />
      </Box>
      <Stack spacing={3}>
        <SimpleCard title="Bill Reminder">
          <TransactionSpecificTable />
        </SimpleCard>
        </Stack>
    </Container>
  );
};

export default ViewSpecificTransaction;
