import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React from "react";
import { useState } from "react";

export default function FormDialog({ state }) {
  const [open, setOpen] = React.useState(state);

  const [showPopup, setShowPopup] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handlePay() {
    setShowPopup(true);
  }
  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Payment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the payment amount.
          </DialogContentText>
          <TextField
            margin="dense"
            id="amount"
            label="Amount"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Pay
          </Button>
          {showPopup && <PaymentConfirmationDialog />}
        </DialogActions>
      </Dialog>
    </Box>
  );
}
