import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React from "react";
import { IconButton, Icon } from "@mui/material";
import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { useState } from "react";
import ReminderConfirmationDialog from "../dialog/ReminderConfirmationDialog";

export default function FormDialog({ currAmount }) {
  const [date, setDate] = useState(new Date());

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setDate(new Date());
    setOpen(false);
  }

  const handleDateChange = (date) => setDate(date);

  return (
    <Box>
      <IconButton disabled={currAmount === "-"} onClick={handleClickOpen}>
        <Icon color="primary">event</Icon>
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Set Reminder</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose the date to be notified.</DialogContentText>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={date}
              disablePast={true}
              onChange={handleDateChange}
              renderInput={(props) => (
                <TextField
                  {...props}
                  label="Choose date"
                  id="mui-pickers-date"
                  sx={{ mb: 2, width: "100%" }}
                />
              )}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <ReminderConfirmationDialog handleCloseParent={handleClose} />
        </DialogActions>
      </Dialog>
    </Box>
  );
}
