import React, { useState } from "react";
import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";


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
    name: "Bill Reminder",
    date: "18 january, 2019",
    amount: 1000,
    status: "Outstanding : 1000 EGP",
    company: "Gas Bill ID #5173",
  },
];



  const TransactionSpecificTable = () => {return ( 
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            {/* <TableCell align="left">Title</TableCell> */}
            <TableCell align="left">Details</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="right">Status</TableCell>
            
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              {/* <TableCell align="left">{subscriber.name}</TableCell> */}
              <TableCell align="left">{subscriber.company}</TableCell>
              <TableCell align="center">{subscriber.date}</TableCell>
              <TableCell align="right">{subscriber.status}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      </Box>
  );
};
export default TransactionSpecificTable;

