import { Button, Grid, Icon, styled } from '@mui/material';
import { Span } from 'app/components/Typography';
import { useState } from 'react';
import { TextValidator } from 'react-material-ui-form-validator';
import BankAccountDetails from '../bank/BankAccountDetails';
import SelectedMenu from 'app/components/Common/Menus/SelectedMenu';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Label = styled('label')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '16px',
}));

const Input = styled('input')(() => ({
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  width: '100%',
}));

const ButtonWrapper = styled('div')(() => ({
  marginTop: '16px',
}));

const ErrorMessage = styled('div')(() => ({
  color: 'red',
  marginTop: '16px',
}));

const MakeDomesticBankTransferForm = () => {
  const [account, setAccount] = useState('');
  const [sent, setSent] = useState('');
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [balance, setBalance] = useState(1000);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAccountKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleSentKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleAmountKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handlePinKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (account === '' || sent === '' || amount === '' || pin === '') {
      setErrorMessage('Please fill in all fields.');
    } else if (isNaN(amount)) {
      setErrorMessage('Please enter a valid amount.');
    } else if (parseInt(amount) > balance) {
      setErrorMessage('Insufficient balance.');
    } else {
      console.log('Account:', account);
      console.log('Sent:', sent);
      console.log('Amount:', amount);
      console.log('Pin:', pin);
      setBalance(balance - parseInt(amount));
      setAccount('');
      setSent('');
      setAmount('');
      setPin('');
      setErrorMessage('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Span>Sender Account Number:</Span>
        <Input
          type="text"
          pattern="[0-9]*"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          onKeyPress={handleAccountKeyPress}
        />
      </Label>
      <Label>
        <Span>Receiver Account Number:</Span>
        <Input
          type="text"
          pattern="[0-9]*"
          value={sent}
          onChange={(e) => setSent(e.target.value)}
          onKeyPress={handleSentKeyPress}
        />
      </Label>
      <Label>
        <Span>Amount:</Span>
        <Input
          type="text"
          pattern="[0-9]*"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onKeyPress={handleAmountKeyPress}
        />
      </Label>
      <Label>
        <Span>Pin:</Span>
        <Input
          type="password"
          pattern="[0-9]*"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          onKeyPress={handlePinKeyPress}
        />
      </Label>
      <ButtonWrapper>
        <Button type="submit" variant="contained" color="primary">
          Confirm
        </Button>
      </ButtonWrapper>
      <div>Balance: {balance}</div>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Form>
  );
};

export default MakeDomesticBankTransferForm;
