import { LockOpen, Person } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  Divider,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { FlexBetween, FlexBox } from "app/components/FlexBox";
import { H4, Small } from "app/components/Typography";
import { useState } from "react";
import AcceptRejectDialog from "app/views/material-kit/dialog/AcceptRejectDialog";

const ContentBox = styled(FlexBox)({
  alignItems: "center",
  flexDirection: "column",
});

const StyedSmall = styled(Small)({
  color: "#08ad6c",
  padding: "2px 4px",
  borderRadius: "4px",
  background: "rgba(9, 182, 109, 0.15)",
});

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "13px",
  color: theme.palette.text.primary,
  ":hover": { background: "transparent" },
}));

const UserPersonalInfo = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  function handleReject() {
    setShowPopup(true);
    setMessage("Request has been rejected.");
  }

  function handleAccept() {
    setShowPopup(true);
    setMessage("Request has been accepted.");
  }

  return (
    <Card sx={{ pt: 3 }} elevation={3}>
      <ContentBox mb={3} alignContent="center">
        <H4 sx={{ mt: "16px", mb: "8px" }}>Ahmed Mohamed</H4>
        <Small color="text.secondary">Computer Scientist</Small>
      </ContentBox>

      <Divider />

      <Table>
        <TableBody>
          {/* <TableRow>
            <TableCell sx={{ pl: 2 }}>Email</TableCell>
            <TableCell>
              <div>ui-lib@example.com</div>
              <StyedSmall>Email Verified</StyedSmall>
            </TableCell>
          </TableRow> */}

          {customerInfo.map((item, ind) => (
            <TableRow key={ind}>
              <TableCell sx={{ pl: 2 }}>{item.title}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <FlexBetween p={2}>
        <StyledButton className="danger" onClick={handleReject}>
          Reject
        </StyledButton>

        <StyledButton className="primary" onClick={handleAccept}>
          Accept
        </StyledButton>
      </FlexBetween>
      {showPopup && <AcceptRejectDialog value={message} />}
    </Card>
  );
};

const customerInfo = [
  { title: "Phone", value: "01236565798" },
  { title: "Country", value: "Egypt" },
  { title: "City", value: "Cairo" },
  { title: "Address 1", value: "AlRehab, Group99" },
  { title: "email ", value: "Ahmed-2002@gmail.com" },
];

export default UserPersonalInfo;
