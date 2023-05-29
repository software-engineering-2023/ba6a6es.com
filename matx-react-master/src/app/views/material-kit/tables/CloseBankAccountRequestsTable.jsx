import React, { useState } from "react";
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
} from "@mui/material";
import SourceIcon from "@mui/icons-material/Source";
import BankAccountDetails from "app/views/material-kit/bank/BankAccountDetails";
import BankAccountDetailsPanel from "../expansion-panel/BankAccountDetailsPanel";
import { Link, useNavigate } from "react-router-dom";

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const subscribarList = [
  {
    type: "Current",
    requestDate: "18-01-2019",
    balance: "EGP100",
    status: "open",
    accountNo: "100023114560",
  },
  {
    type: "Current",
    requestDate: "30-08-2020",
    balance: "EGP0",
    status: "indebted",
    accountNo: "100023454430",
  },
  {
    type: "Savings",
    requestDate: "05-06-2021",
    balance: "EGP36,000",
    status: "Open",
    accountNo: "964023574220",
  },
];

const CloseBankAccountRequestsTable = () => {
  const navigate = useNavigate();
  const showRequestDetail = () => {
    navigate("/bankerActions/HandleCloseRequest");
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="center">Account Type</TableCell>
            <TableCell align="center">Account Number</TableCell>
            <TableCell align="center">Request Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Balance</TableCell>
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
              <TableCell align="center">{subscriber.balance}</TableCell>
              <TableCell align="center">
                {
                  <IconButton onClick={showRequestDetail}>
                    <Icon sx={{ color: "text.primary" }}>information</Icon>
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
export default CloseBankAccountRequestsTable;
