import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React from "react";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReportConfirmationDialog({ value }) {
  const [open, setOpen] = React.useState(true);

  const navigate = useNavigate();

  function handleClose() {
    setOpen(false);
    navigate("/banker/OpenAccountRequests");
  }

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Confirmation</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {value}{" "}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}

          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
