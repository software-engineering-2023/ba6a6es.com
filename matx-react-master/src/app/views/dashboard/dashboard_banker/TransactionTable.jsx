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
            <TableCell align="left">ID</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Type</TableCell>
            {/* <TableCell align="center">State</TableCell> */}
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
              {/* //<TableCell align="center">{subscriber.state}</TableCell> */}

              <TableCell align="right">
                <Button
                  color={subscriber.color}
                  variant="contained"
                  type="submit"
                  component={Link}
                  to={subscriber.to}
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
