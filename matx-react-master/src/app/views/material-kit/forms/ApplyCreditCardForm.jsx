// import { DatePicker } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
//import "./styles.css";
import "./App.css";
import CreditCardConfirmationDialog from "../dialog/CreditCardConfirmationDialog";

import { Button, Grid, Icon, styled } from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const ApplyCreditCardForm = () => {
  const [state, setState] = useState({ date: new Date() });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    setShowPopup(true);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  // const handleDateChange = (date) => setState({ ...state, date });

  const { cardName, email, mobile } = state;

  return (
    <>
      <div>
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                type="text"
                name="cardName"
                label="Name on Card"
                onChange={handleChange}
                value={cardName || ""}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />

              <TextField
                type="email"
                name="email"
                label="Email"
                value={email || ""}
                onChange={handleChange}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
              />

              <TextField
                type="number"
                name="mobile"
                value={mobile || ""}
                label="Mobile Nubmer"
                pattern="[0-9]*"
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>
          </Grid>

          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
          </Button>
          {showPopup && <CreditCardConfirmationDialog />}
        </ValidatorForm>
      </div>
    </>
  );
};

export default ApplyCreditCardForm;
