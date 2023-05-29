import {
  Box,
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

const TransactionTable = ({ subscribarList }) => {
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Num</TableCell>
            {/* <TableCell align="center">State</TableCell> */}
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              {/* <Icon className="icon">{subscriber.icon}</Icon> */}

              <TableCell align="center">{subscriber.id}</TableCell>
              <TableCell align="center">{subscriber.type}</TableCell>
              <TableCell align="center">{subscriber.num}</TableCell>
              <TableCell align="center">{subscriber.description}</TableCell>
              <TableCell align="center">{subscriber.status}</TableCell>

              {/* //<TableCell align="center">{subscriber.state}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default TransactionTable;
