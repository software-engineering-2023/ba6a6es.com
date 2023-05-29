import BillPaymentDialog from "../dialog/BillPaymentDialog";
import { useState } from "react";
import "./App.css";
import BillReminderDialog from "../dialog/BillReminderDialog";

import {
  Box,
  Button,
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
      type: "Water",
      dueDate: "03-06-2023",
      amount: "EGP545",
      index: 0,
    },
    {
      type: "Electricty",
      dueDate: "29-06-2023",
      amount: "EGP870",
      index: 1,
    },
    {
      type: "Telephone",
      dueDate: "01-08-2023",
      amount: "EGP80",
      index: 2,
    },
    {
      type: "Internet",
      dueDate: "15-07-2023",
      amount: "EGP440",
      index: 3,
    },
    {
      type: "Gas",
      dueDate: "04-09-2023",
      amount: "EGP460",
      index: 4,
    },
  ]);

  const [open, setOpen] = useState(false);

  const handlePayBill = (indOf) => {
    // const newArray = subscribarList.map((item, i) => {
    //   if (indOf === i) {
    //     return {
    //       ...item,
    //       amount: inputAmount === 0 ? "-" : "EGP" + inputAmount,
    //     };
    //   } else {
    //     return item;
    //   }
    // });
    const newArray = subscribarList.filter((item) => item.index !== indOf);
    setSubscribarList(newArray);
  };

  function handleClick() {
    setOpen(true);
  }

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">Pay</TableCell>
            <TableCell align="center">Set Reminder</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index} hover={true}>
              <TableCell align="center">{subscriber.type}</TableCell>
              <TableCell align="center">{subscriber.amount}</TableCell>
              <TableCell align="center">{subscriber.dueDate}</TableCell>
              <TableCell align="center">
                <BillPaymentDialog
                  handlePayBill={handlePayBill}
                  indOf={subscribarList[index].index}
                  currAmount={subscribarList[index].amount.substring(3)}
                />
              </TableCell>
              <TableCell align="center">
                <BillReminderDialog currAmount={subscribarList[index].amount} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default SimpleTable;
