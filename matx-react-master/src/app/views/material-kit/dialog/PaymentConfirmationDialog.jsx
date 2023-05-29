import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  handleCloseParent,
  handlePayParent,
  handlePayFullParent,
  inputField,
}) {
  const [open, setOpen] = React.useState(false);

  function handlePay() {
    if (inputField.trim().length === 0) {
      return;
    }
    handlePayParent();
    setOpen(true);
  }

  function handlePayFull() {
    handlePayFullParent();
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    handleCloseParent();
  }

  return (
    <div>
      <Button onClick={handlePay} color="primary">
        Pay
      </Button>
      <Button onClick={handlePayFull} color="primary">
        Pay in Full
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Success</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Your payment was made successfully.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
