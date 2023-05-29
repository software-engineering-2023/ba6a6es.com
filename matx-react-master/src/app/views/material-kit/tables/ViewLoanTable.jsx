import LoanPaymentDialog from "../dialog/LoanPaymentDialog";
import { useState } from "react";
import "./App.css";

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

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const SimpleTable = () => {
  const [subscribarList, setSubscribarList] = useState([
    {
      startDate: "04-11-2022",
      amount: "EGP50000",
      status: "active",
      type: "Personal",
      dueDate: "03-06-2023",
      remainingAmount: "EGP12000",
    },
    {
      startDate: "15-06-2021",
      amount: "EGP200000",
      status: "active",
      type: "Car",
      dueDate: "14-06-2024",
      remainingAmount: "EGP56000",
    },
    {
      startDate: "20-01-2019",
      amount: "EGP20000",
      status: "closed",
      type: "Personal",
      dueDate: "19-01-2020",
      remainingAmount: "-",
    },
  ]);

  const handlePayLoan = (indOf, inputAmount) => {
    const newArray = subscribarList.map((item, i) => {
      if (indOf === i) {
        return {
          ...item,
          remainingAmount: inputAmount === 0 ? "-" : "EGP" + inputAmount,
        };
      } else {
        return item;
      }
    });
    setSubscribarList(newArray);
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Outstanding Amount</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">Pay</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index} hover="true">
              <TableCell align="center">{subscriber.startDate}</TableCell>
              <TableCell align="center">{subscriber.type}</TableCell>
              <TableCell align="center">{subscriber.status}</TableCell>
              <TableCell align="center">{subscriber.amount}</TableCell>
              <TableCell align="center">{subscriber.remainingAmount}</TableCell>
              <TableCell align="center">{subscriber.dueDate}</TableCell>
              <TableCell align="center">
                <LoanPaymentDialog
                  handlePayLoan={handlePayLoan}
                  indOf={index}
                  currAmount={subscribarList[index].remainingAmount}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default SimpleTable;
