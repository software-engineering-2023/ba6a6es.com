import CreditPaymentDialog from "../dialog/CreditPaymentDialog";
import { useState } from "react";
import "./App.css";

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

const SimpleTable = () => {
  const [subscribarList, setSubscribarList] = useState([
    {
      cardNum: "4916 0919 7731 0972",
      name: "Hana Younis",
      expiryDate: "01/2030",
      creditLimit: "EGP50000",
      status: "active",
      dueDate: "3 june, 2023",
      remainingAmount: "EGP4000",
    },
    {
      cardNum: "4916 9624 9155 8215",
      name: "Haneen Khaled",
      expiryDate: "04/2027",
      creditLimit: "EGP15000",
      status: "active",
      dueDate: "14 june, 2024",
      remainingAmount: "EGP1800",
    },
    {
      cardNum: "5160 1678 8088 3410",
      name: "Zeyad Habash",
      expiryDate: "08/2029",
      creditLimit: "EGP25000",
      status: "active",
      dueDate: "19 january, 2020",
      remainingAmount: "-",
    },
    {
      cardNum: "5381 3176 8117 7024",
      name: "Shorok Abdulraof",
      expiryDate: "11/2026",
      creditLimit: "EGP10000",
      status: "active",
      dueDate: "19 january, 2020",
      remainingAmount: "EGP460",
    },
  ]);

  const handlePayCredit = (indOf, inputAmount) => {
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
            <TableCell align="center">Card Number</TableCell>
            <TableCell align="center">Cardholder Name</TableCell>
            <TableCell align="center">Expiry Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Credit Limit</TableCell>
            <TableCell align="center">Outstanding Amount</TableCell>
            <TableCell align="center">Pay</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index} hover={true}>
              <TableCell align="center">{subscriber.cardNum}</TableCell>
              <TableCell align="center">{subscriber.name}</TableCell>
              <TableCell align="center">{subscriber.expiryDate}</TableCell>
              <TableCell align="center">{subscriber.status}</TableCell>
              <TableCell align="center">{subscriber.creditLimit}</TableCell>
              <TableCell align="center">{subscriber.remainingAmount}</TableCell>
              <TableCell align="center">
                <CreditPaymentDialog
                  handlePayCredit={handlePayCredit}
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
