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
} from '@mui/material';

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const SimpleTable = ({ subscriberList }) => {
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscriberList.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell align="left">{subscriber.name}</TableCell>
              <TableCell align="center">{subscriber.company}</TableCell>
              <TableCell align="center">{subscriber.date}</TableCell>
              <TableCell align="center">{subscriber.status}</TableCell>
              <TableCell align="center">${subscriber.amount}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <Icon color="error">close</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default SimpleTable;
