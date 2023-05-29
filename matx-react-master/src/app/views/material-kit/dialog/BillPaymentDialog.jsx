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
import FullPaymentConfirmationDialog from "./FullPaymentConfirmationDialog";
import { IconButton, Icon } from "@mui/material";
import Input from "@mui/material/Input";

export default function FormDialog({ handlePayBill, indOf, currAmount }) {
  const [open, setOpen] = React.useState(false);

  //const [inputAmount, setInputAmount] = useState("");

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  // const handleChange = (event) => {
  //   setInputAmount(event.target.value);
  // };

  // function handlePay() {
  //   if (parseInt(currAmount.substring(3)) < parseInt(inputAmount)) {
  //     handlePayBill(indOf, 0);
  //   } else {
  //     handlePayBill(
  //       indOf,
  //       parseInt(currAmount.substring(3)) - parseInt(inputAmount)
  //     );
  //   }
  // }

  function handlePayFull() {
    handlePayBill(indOf);
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
            Are you sure you want to pay the following amount?
          </DialogContentText>
          <Input
            //label="Amount"
            type="number"
            name="amount"
            disabled={true}
            fullWidth
            value={currAmount}
          ></Input>
        </DialogContent>
        <DialogActions>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <FullPaymentConfirmationDialog
            handleCloseParent={handleClose}
            handlePayFullParent={handlePayFull}
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
}
