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
import PaymentConfirmationDialog from "./PaymentConfirmationDialog";
import { IconButton, Icon } from "@mui/material";

export default function FormDialog({ handlePayLoan, indOf, currAmount }) {
  const [open, setOpen] = React.useState(false);

  const [inputAmount, setInputAmount] = useState("");

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleChange = (event) => {
    setInputAmount(event.target.value);
  };

  function handlePay() {
    if (parseInt(currAmount.substring(3)) < parseInt(inputAmount)) {
      handlePayLoan(indOf, 0);
    } else {
      handlePayLoan(
        indOf,
        parseInt(currAmount.substring(3)) - parseInt(inputAmount)
      );
    }
  }

  function handlePayFull() {
    handlePayLoan(indOf, 0);
  }

  return (
    <Box>
      <IconButton disabled={currAmount === "-"} onClick={handleClickOpen}>
        <Icon color="primary">payment</Icon>
      </IconButton>

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
            label="Amount"
            type="number"
            name="amount"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <PaymentConfirmationDialog
            handleCloseParent={handleClose}
            handlePayParent={handlePay}
            handlePayFullParent={handlePayFull}
            inputField={inputAmount}
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
}
