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
import CustomizedDialog from "../dialog/CustomizedDialog";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const SendBankAnnouncementForm = () => {
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

  const { accountNo, description } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            {/* <TextField
              select
              type="text"
              name="accountNo"
              variant="outlined"
              label="Account Number"
              onChange={handleChange}
              value={accountNo || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
              SelectProps={{ native: true, IconComponent: KeyboardArrowDown }}
            >
              <option value="default"></option>
              <option value="acc1">100023114560</option>
              <option value="acc2">100023454430</option>
              <option value="acc3">964023574220</option>
            </TextField> */}

            <TextField
              type="text-area"
              name="description"
              variant="outlined"
              label="Please enter message to be sent as bank announcement."
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
        {showPopup && <CustomizedDialog />}
      </ValidatorForm>
    </div>
  );
};

export default SendBankAnnouncementForm;
