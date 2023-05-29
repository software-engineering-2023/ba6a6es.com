import { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import TransferDialog from "../dialog/TransferDialog";

const MakeInternationalBankTransferForm = () => {
  const [balance, setBalance] = useState(1000);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const formik = useFormik({
    initialValues: {
      account: "",
      sent: "",
      amount: "",
      pin: "",
    },
    validationSchema: Yup.object({
      account: Yup.string()
        .required("Required")
        .matches(/^[0-9]+$/, "Must be a number"),
      sent: Yup.string()
        .required("Required")
        .matches(/^[0-9]+$/, "Must be a number"),
      amount: Yup.number()
        .required("Required")
        .positive("Must be a positive number")
        .integer("Must be an integer")
        .test("balance", "Insufficient balance", (value) => value <= balance),
      pin: Yup.string()
        .required("Required")
        .matches(/^[0-9]+$/, "Must be a number"),
    }),
    onSubmit: (values) => {
      console.log("Account:", values.account);
      console.log("Sent:", values.sent);
      console.log("Amount:", values.amount);
      console.log("Pin:", values.pin);
      setBalance(balance - parseInt(values.amount));
      setErrorMessage("");
      formik.resetForm();
      setShowPopup(true);
    },
  });

  return (
    <Box padding={3}>
      <Grid container spacing={5}>
        <Grid item sm={6} xs={12}>
          <form onSubmit={formik.handleSubmit}>
            <Box marginBottom={2}>
              <TextField
                fullWidth
                type="text"
                name="account"
                label="Sender Account Number"
                variant="outlined"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.account}
                error={formik.touched.account && Boolean(formik.errors.account)}
                helperText={formik.touched.account && formik.errors.account}
              />
            </Box>
            <Box marginBottom={2}>
              <TextField
                fullWidth
                type="text"
                name="sent"
                label="Receiver Account Number"
                variant="outlined"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.sent}
                error={formik.touched.sent && Boolean(formik.errors.sent)}
                helperText={formik.touched.sent && formik.errors.sent}
              />
            </Box>
            <Box marginBottom={2}>
              <TextField
                fullWidth
                type="text"
                name="country"
                label="Country of Receiver"
                variant="outlined"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.sent}
                error={formik.touched.sent && Boolean(formik.errors.sent)}
                helperText={formik.touched.sent && formik.errors.sent}
              />
            </Box>
            <Box marginBottom={2}>
              <TextField
                fullWidth
                type="text"
                name="amount"
                label="Amount"
                variant="outlined"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.amount}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
              />
            </Box>
            <Box marginBottom={2}>
              <TextField
                fullWidth
                type="password"
                name="pin"
                label="Pin"
                variant="outlined"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.pin}
                error={formik.touched.pin && Boolean(formik.errors.pin)}
                helperText={formik.touched.pin && formik.errors.pin}
              />
            </Box>
            <Box marginTop={2}>
              <Button type="submit" variant="contained" color="primary">
                Confirm
              </Button>
            </Box>
          </form>
          <Box marginTop={2}>
            <Typography>Balance: {balance}</Typography>
          </Box>
          {errorMessage && (
            <Box marginTop={2} color="red">
              <Typography>{errorMessage}</Typography>
            </Box>
          )}
        </Grid>
      </Grid>
      {showPopup && <TransferDialog />}
    </Box>
  );
};

export default MakeInternationalBankTransferForm;
