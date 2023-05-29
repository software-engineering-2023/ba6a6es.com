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

const SimpleTable = ({ subscribarList }) => {
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left"></TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Card</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Account</TableCell>
            <TableCell align="center">Transaction ID</TableCell>
            {/* <TableCell align="center">Amount</TableCell>*/}
            {/* <TableCell align="right"></TableCell> */}
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index} hover={true}>
              {/* <Icon className="icon">{subscriber.icon}</Icon> */}
              <TableCell align="center">
                {<Icon className="icon">{subscriber.icon}</Icon>}
              </TableCell>
              <TableCell align="center">{subscriber.type}</TableCell>
              <TableCell align="center">{subscriber.cardNumber}</TableCell>
              <TableCell align="center">{subscriber.amount}</TableCell>
              <TableCell align="center">{subscriber.date}</TableCell>
              <TableCell align="center">{subscriber.account}</TableCell>
              <TableCell align="center">{subscriber.transNumber}</TableCell>
              {/* <TableCell align="center">${subscriber.amount}</TableCell> */}
              {/* <TableCell align="center">
                {/* <IconButton>
                      <Icon color="error">close</Icon>
                    </IconButton> */}
              {/* <Icon className="icon">info</Icon>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default SimpleTable;
