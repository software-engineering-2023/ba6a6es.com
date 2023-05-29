import {
  Card,
  Fade,
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
import { format } from 'date-fns';
import PreviousLoanTable from './PreviousLoanTable';

const StyledCell = styled(TableCell)({
  paddingTop: '4px',
  paddingBottom: '4px',
  textTransform: 'capitalize',
});

const StyedSmall = styled(Small)(({ theme, status }) => ({
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  background: status === 'paid' ? '#08ad6c' : status === 'unpaid' && theme.palette.error.main,
}));

const CustomerInvoice = () => {
  return (
    <Fade in timeout={300}>
      <Card elevation={3} sx={{ width: '100%', overflow: 'auto' }}>
        <PreviousLoanTable
          subscribarList={[
            {
              amount: 'EGP 30000',
              type: 'Personal Loan',
              date: '18-05-2022',
              duration: '0 months',
              status: 'paid',
            },
            {
              amount: 'EGP 500000',
              type: 'Car Loan',
              date: '11-09-2021',
              duration: '2 months',
              status: 'unpaid',
            },
          ]}
        />
      </Card>
    </Fade>
  );
};

export default CustomerInvoice;
