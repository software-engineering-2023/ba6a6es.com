import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import CloseBankAccountForm from "app/views/material-kit/forms/CloseBankAccountForm";
import SendBankAnnouncementForm from "../forms/SendBankAnnouncementForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const SendBankAnnouncement = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Send Bank Announcement", path: "" },
            
          ]}
        />
      </Box>

      <SimpleCard title="Please fill the following to send an announcement.">
        <SendBankAnnouncementForm />
      </SimpleCard>
    </Container>
  );
};

export default SendBankAnnouncement;
