import React, { useState } from "react";
import {
  Box,
  styled,
  Badge,
  Icon,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link,useNavigate } from 'react-router-dom';


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
    company: "ABC&Co for Natural Gas", },
    {name: "Bank Announcement",
    date: "1 feb, 2019",
    amount: 1000,
    status: "open",
    company: "New 15% interest certificates ", },
   { name: "Technical Issue Resolution #5372",
    date: "9 march, 2019",
    amount: 1000,
    status: "open",
    company: "Points not redeemed",
  },
  
];


  const ViewAllNotifications = () => {
    const navigate=useNavigate();
    const showNotificationDetail =() => {
      navigate("/dashboard/notificationDetails");
    
    }
    
    
    
    return ( 
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
              <TableCell align="right">{
              <IconButton onClick={showNotificationDetail}>
          <Icon  sx={{ color: "text.primary" }}>information</Icon>
      </IconButton>        }
      </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      </Box>
  );
};
export default ViewAllNotifications;

