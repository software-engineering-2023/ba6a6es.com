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
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Span } from 'app/components/Typography';

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

// const subscribarList = [
//   {
//     name: "john doe",
//     date: "18 january, 2019",
//     amount: 1000,
//     status: "close",
//     company: "ABC Fintech LTD.",
//   },
//   {
//     name: "kessy bryan",
//     date: "10 january, 2019",
//     amount: 9000,
//     status: "open",
//     company: "My Fintech LTD.",
//   },
//   {
//     name: "james cassegne",
//     date: "8 january, 2019",
//     amount: 5000,
//     status: "close",
//     company: "Collboy Tech LTD.",
//   },
//   {
//     name: "lucy brown",
//     date: "1 january, 2019",
//     amount: 89000,
//     status: "open",
//     company: "ABC Fintech LTD.",
//   },
//   {
//     name: "lucy brown",
//     date: "1 january, 2019",
//     amount: 89000,
//     status: "open",
//     company: "ABC Fintech LTD.",
//   },
//   {
//     name: "lucy brown",
//     date: "1 january, 2019",
//     amount: 89000,
//     status: "open",
//     company: "ABC Fintech LTD.",
//   },
// ];

const TransactionTable = ({ subscribarList }) => {
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">State</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              {/* <Icon className="icon">{subscriber.icon}</Icon> */}

              <TableCell align="left">{subscriber.id}</TableCell>
              <TableCell align="center">{subscriber.Date}</TableCell>
              <TableCell align="center">{subscriber.type}</TableCell>
              <TableCell align="center">{subscriber.state}</TableCell>

              <TableCell align="right">
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  component={Link}
                  to="/ViewAllTrans/ViewAllTransactions"
                >
                  <Span sx={{ pl: 1, textTransform: 'capitalize' }}>{subscriber.text}</Span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default TransactionTable;
