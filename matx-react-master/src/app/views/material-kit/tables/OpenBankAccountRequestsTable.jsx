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
    name: "Shorok Abdulraof",
    reqDate: "18-01-2019",
    balance: "EGP18,040",
    status: "Open",
    phone: "01143728394",
  },
  {
    name: "Zeyad Habash",
    reqDate: "30-08-2020",
    balance: "EGP54,800",
    status: "Open",
    phone: "01246273849",
  },
  {
    name: "Waleed Mohamed",
    reqDate: "05-06-2021",
    balance: "EGP360,000",
    status: "Open",
    phone: "0114372849532",
  },
];

const OpenBankAccountRequestsTable = () => {
  const navigate = useNavigate();
  const showRequestDetail = () => {
    navigate("/bankerActions/HandleOpenRequest");
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="center">Customer Name</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Request Date</TableCell>
            <TableCell align="center">Details</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index} hover={true}>
              <TableCell align="center">{subscriber.name}</TableCell>
              <TableCell align="center">{subscriber.phone}</TableCell>
              <TableCell align="center">{subscriber.reqDate}</TableCell>
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
export default OpenBankAccountRequestsTable;
