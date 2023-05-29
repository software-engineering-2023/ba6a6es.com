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
import BankAccountDetailsPanel from '../expansion-panel/BankAccountDetailsPanel';
import { Link, useNavigate } from 'react-router-dom';

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
    type: 'Gold',
    requestDate: '18-04-2022',
    amount: 'EGP20,000',
    status: 'Open',
    requestNo: '100023114560',
  },
  {
    type: 'Platinum',
    requestDate: '28-08-2022',
    amount: 'EGP50,000',
    status: 'Open',
    requestNo: '100023454430',
  },
  {
    type: 'Silver',
    requestDate: '05-06-2021',
    amount: 'EGP10,000',
    status: 'Open',
    requestNo: '964023574220',
  },
];

const CreditCardRequestsTable = () => {
  const navigate = useNavigate();
  const showRequestDetail = () => {
    navigate('/bankerActions/HandleCardRequest');
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="center">Account Type</TableCell>
            <TableCell align="center">Request Number</TableCell>
            <TableCell align="center">Request Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Details</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index} hover={true}>
              <TableCell align="center">{subscriber.type}</TableCell>
              <TableCell align="center">{subscriber.requestNo}</TableCell>
              <TableCell align="center">{subscriber.requestDate}</TableCell>
              <TableCell align="center">{subscriber.status}</TableCell>
              <TableCell align="center">{subscriber.amount}</TableCell>
              <TableCell align="right">
                {
                  <IconButton onClick={showRequestDetail}>
                    <Icon sx={{ color: 'text.primary' }}>information</Icon>
                  </IconButton>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};
export default CreditCardRequestsTable;
