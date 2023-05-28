import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
} from '@mui/material';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import BankAccountDetails from '../bank/BankAccountDetails';
import SelectedMenu from '../menu/SelectedMenu';
import { Balance } from '@mui/icons-material';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const MakeDomesticBankTransferForm = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });
  const { recieverBankAccount, amount, pin } = state;
  const [Balance, setBalance] = useState(-1);

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <SelectedMenu
              options={BankAccountDetails.map(
                (bankAccounts) => BankAccountDetails.BankAccountData.accountNumber
              )}
              label={'Account number'}
              onClick={() => setBalance(BankAccountDetails.BankAccountData.accountNumber.Balance)}
            />

            <TextField
              type="number"
              name="Account number"
              label="Account number"
              onChange={handleChange}
              value={recieverBankAccount || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              type="number"
              name="Amount to transfer"
              label="amount"
              value={amount || ''}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <TextField
              type="number"
              name="Pin number"
              label="pin number to confirm"
              value={pin || ''}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />
            <Button color="primary" variant="contained" type="submit">
              <Icon>send</Icon>
              <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Confirm</Span>
              onClick = {() => setBalance(Balance - amount)}
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
    </div>
  );
};

export default MakeDomesticBankTransferForm;
