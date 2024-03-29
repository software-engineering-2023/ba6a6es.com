import React, { useState } from 'react';
import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import SourceIcon from '@mui/icons-material/Source';
import BankAccountDetails from 'app/views/material-kit/bank/BankAccountDetails';

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const subscribarList = [
  {
    name: 'john doe',
    date: '18 january, 2019',
    amount: 1000,
    status: 'open',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'kessy bryan',
    date: '10 january, 2019',
    amount: 9000,
    status: 'open',
    company: 'My Fintech LTD.',
  },
  {
    name: 'james cassegne',
    date: '8 january, 2019',
    amount: 5000,
    status: 'open',
    company: 'Collboy Tech LTD.',
  },
  {
    name: 'lucy brown',
    date: '1 january, 2019',
    amount: 89000,
    status: 'open',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'lucy brown',
    date: '1 january, 2019',
    amount: 89000,
    status: 'open',
    company: 'ABC Fintech LTD.',
  },
  {
    name: 'lucy brown',
    date: '1 january, 2019',
    amount: 89000,
    status: 'open',
    company: 'ABC Fintech LTD.',
  },
];

const ViewBankAccountTable = () => {
  const [showBankAccountDetails, setShowBankAccountDetails] = useState(false);

  const handleIconClick = () => {
    setShowBankAccountDetails(true);
  };

  const handleIconClickClose = () => {
    const confirmed = window.confirm('Are you sure you want to close the selected Bank Account?');
    if (confirmed) {
      alert('Bank Account has been closed successfully.');
    } else {
      // do something
    }
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">View Bank Account Details</TableCell>
            <TableCell align="right">Close Bank Account</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell align="left">{subscriber.name}</TableCell>
              <TableCell align="center">{subscriber.company}</TableCell>
              <TableCell align="center">{subscriber.date}</TableCell>
              <TableCell align="center">{subscriber.status}</TableCell>
              <TableCell align="center">${subscriber.amount}</TableCell>
              <TableCell align="center">
                <IconButton onClick={handleIconClick}>
                  <SourceIcon color="primary" />
                </IconButton>
                {showBankAccountDetails && <BankAccountDetails />}
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={handleIconClickClose}>
                  <Icon color="error">close</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};
export default ViewBankAccountTable;
