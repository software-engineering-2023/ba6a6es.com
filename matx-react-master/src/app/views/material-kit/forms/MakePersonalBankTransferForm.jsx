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
import SelectedMenu from '../menu/SelectedMenu';
import { Balance } from '@mui/icons-material';
import BankAccountDetails from '../bank/BankAccountDetails';
import { indexOf } from 'lodash';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const MakePersonalBankTransferForm = () => {
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
  const { amount, pin } = state;
  const [sender, setSender] = useState('');
  const [BalanceSender, setBalanceSender] = useState(-1);
  const [receiver, setReceiver] = useState('');
  const [BalanceReceiver, setBalanceReceiver] = useState(-1);
  const [index, setIndex] = useState(-1);
  const BankAccountDetailsWithoutSender = [];

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
              //onClick={() => setBalance(BankAccountDetails.BankAccountData.accountNumber.Balance)}
              onClick={() => {
                setBalanceSender(this.value.Balance);
                setSender(this.value.BankAccountData.name);
                setIndex(indexOf(this));
                BankAccountDetailsWithoutSender = BankAccountDetails.splice({ index }, 1);
              }}
              //test it out 27teyaty
            />

            <SelectedMenu
              options={BankAccountDetailsWithoutSender.map(
                (bankAccounts) => BankAccountDetails.BankAccountData.accountNumber
              )}
              label={'Account number'}
              //onClick={() => setBalance(BankAccountDetails.BankAccountData.accountNumber.Balance)}
              onClick={() => this.value.BankAccountData === setBalanceReceiver(this.value.Balance)} //test it out 27teyaty
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
              onClick ={' '}
              {() => {
                setBalanceSender(BalanceSender - amount);
                setBalanceReceiver(BalanceReceiver + amount);
              }}
            </Button>
          </Grid>
        </Grid>
      </ValidatorForm>
    </div>
  );
};

export default MakePersonalBankTransferForm;
