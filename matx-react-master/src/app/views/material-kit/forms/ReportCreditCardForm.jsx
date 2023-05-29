import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { KeyboardArrowDown } from "@mui/icons-material";
import ReportConfirmationDialog from "../dialog/ReportConfirmationDialog";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const SimpleForm = () => {
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
    // console.log("submitted");
    // console.log(event);
    setShowPopup(true);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const { creditCard, incident, date, description } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              select
              type="text"
              name="creditCard"
              variant="outlined"
              label="Credit Card"
              onChange={handleChange}
              value={creditCard || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
              SelectProps={{ native: true, IconComponent: KeyboardArrowDown }}
            >
              <option value="default"></option>
              <option value="card1">Hana Younis</option>
              <option value="card2">Haneen Khaled</option>
              <option value="card3">Zeyad Habash</option>
              <option value="card4">Shorok Abdulraof</option>
            </TextField>

            <TextField
              select
              type="text"
              name="incident"
              label="Incident"
              onChange={handleChange}
              value={incident || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
              SelectProps={{ native: true, IconComponent: KeyboardArrowDown }}
            >
              <option value="default"></option>
              <option value="incident1">Stolen</option>
              <option value="incident2">Lost</option>
              <option value="incident3">Damaged</option>
              <option value="incident3">Other</option>
            </TextField>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                disableFuture={true}
                onChange={handleDateChange}
                validators={["required"]}
                errorMessages={["this field is required"]}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Date of Incident"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: "100%" }}
                  />
                )}
              />
            </LocalizationProvider>
            <TextField
              type="text"
              name="description"
              variant="outlined"
              label="Pleaese describe what happened."
              onChange={handleChange}
              value={description || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
        {showPopup && <ReportConfirmationDialog />}
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;
