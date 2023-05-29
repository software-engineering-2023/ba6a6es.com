import React, { useState } from "react";
import {
  Box,
  styled,
  IconButton,
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
    name: "Gas Bill",
    date: "18 january, 2019",
    amount: 1000,
    status: "open",
    company: "ABC for Natural Gas",
    name: "Bank Announcement",
    date: "18 january, 2019",
    amount: 1000,
    status: "open",
    company: "ABC Fintech LTD.",
    name: "Hana",
    date: "18 january, 2019",
    amount: 1000,
    status: "open",
    company: "ABC Fintech LTD.",
  },
  
];



  const ViewAllNotifications = () => {return ( 
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Type</TableCell>
            <TableCell align="center">Content</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="right"></TableCell>

            
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell align="left">{subscriber.name}</TableCell>
              <TableCell align="center">{subscriber.company}</TableCell>
              <TableCell align="center">{subscriber.date}</TableCell>
                          
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      </Box>
  );
};
export default ViewAllNotifications;

