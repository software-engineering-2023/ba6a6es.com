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
import { H3, Small } from 'app/components/Typography';

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));
const StyledSmall = styled(Small)(({ theme, status }) => ({
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  background: status === 'paid' ? '#08ad6c' : status === 'unpaid' && theme.palette.error.main,
  fontSize: '12px',
}));

const SimpleTable = ({ subscribarList }) => {
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="center">Loan Amount</TableCell>
            <TableCell align="center">Loan Type</TableCell>
            <TableCell align="center">Loan Date</TableCell>
            <TableCell align="center">Remaining Duration</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index} hover={true}>
              <TableCell align="center">{subscriber.amount}</TableCell>
              <TableCell align="center">{subscriber.type}</TableCell>
              <TableCell align="center">{subscriber.date}</TableCell>
              <TableCell align="center">{subscriber.duration}</TableCell>
              <TableCell align="center">
                <StyledSmall status={subscriber.status}>{subscriber.status}</StyledSmall>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default SimpleTable;
