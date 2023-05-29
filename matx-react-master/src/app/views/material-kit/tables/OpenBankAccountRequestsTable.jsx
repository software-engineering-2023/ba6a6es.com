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
    type: 'Current',
    requestDate: '18-01-2019',
    balance: 'EGP10,000',
    status: 'Open',
    requestno: '100023114560',
  },
  {
    type: 'Current',
    requestDate: '30-08-2020',
    balance: 'EGP5,000',
    status: 'Open',
    requestno: '100023454430',
  },
  {
    type: 'Savings',
    requestDate: '05-06-2021',
    balance: 'EGP150,000',
    status: 'Open',
    requestno: '964023574220',
  },
];

const OpenBankAccountRequestsTable = () => {
  const navigate = useNavigate();
  const showRequestDetail = () => {
    navigate('/bankerActions/HandleOpenRequest');
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
            <TableCell align="center">Minimum Balance</TableCell>
            <TableCell align="center">Details</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index} hover={true}>
              <TableCell align="center">{subscriber.type}</TableCell>
              <TableCell align="center">{subscriber.accountNo}</TableCell>
              <TableCell align="center">{subscriber.requestDate}</TableCell>
              <TableCell align="center">{subscriber.status}</TableCell>
              <TableCell align="center">{subscriber.requestno}</TableCell>
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
export default OpenBankAccountRequestsTable;
