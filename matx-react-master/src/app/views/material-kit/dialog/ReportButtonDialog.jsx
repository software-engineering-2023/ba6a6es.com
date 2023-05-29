import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import TextField from "@mui/material/TextField";
import React from "react";
import { Fab, Icon, IconButton } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import CurrentUserType from "app/CurrentUserType";
import { useNavigate } from "react-router-dom";
import { func } from "prop-types";

const Toggle = styled("div")(() => ({
  position: "fixed",
  right: "30px",
  bottom: "50px",
  zIndex: 99,
  transition: "all 0.15s ease",
  "&.open": {
    right: "10px",
  },
}));

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const { palette } = useTheme();
  const textColor = palette.primary.contrastText;

  const navigate = useNavigate();

  function handleReportCredit() {
    setOpen(false);
    navigate("/creditCard/ReportCreditCard");
  }

  function handleReportTechnical() {
    setOpen(false);
    navigate("/technicalIssue/ReportTechnicalIssue");
  }
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const toggle = () => {
    //call a new page that you can report
    // updateSettings({
    //   secondarySidebar: { open: !settings.secondarySidebar.open },
    // });
  };
  return (
    <Box>
      <Toggle>
        <IconButton onClick={handleClickOpen} size="small" aria-label="toggle">
          <Icon sx={{ color: textColor }}>close</Icon>
        </IconButton>

        {CurrentUserType.getUserType() === "client" && (
          <Fab color="error.main" aria-label="expand" onClick={handleClickOpen}>
            <ErrorOutlineOutlinedIcon
              size="medium"
              sx={{ color: palette.error.main }}
            />
          </Fab>
        )}
      </Toggle>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Report</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Which issue would you like to report?
          </DialogContentText>
          <Button onClick={handleReportCredit}>Report Credit Card Issue</Button>
          <Button onClick={handleReportTechnical}>
            Report Technical Issue
          </Button>
        </DialogContent>
        <DialogActions>
          <Button variant="danger" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
