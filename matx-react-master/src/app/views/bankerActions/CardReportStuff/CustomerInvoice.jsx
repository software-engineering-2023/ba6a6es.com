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
import CreditTransactionTable from 'app/views/material-kit/tables/CreditTransactionTable';

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
        <CreditTransactionTable
          subscribarList={[
            {
              cardNumber: '**** **** **** 1234',
              icon: 'arrow_downward',
              date: '18-05-2023',
              amount: 'EGP1000',
              type: 'Purchase',
              transNumber: '54D879E56',
              account: 'Water Company',
            },
            {
              cardNumber: '**** **** **** 1234',
              icon: 'arrow_downward',
              date: '18-05-2023',
              amount: 'EGP5000',
              type: 'Withdrawal',
              transNumber: '632R65G32',
              account: 'ATM',
            },
            {
              cardNumber: '**** **** **** 1234',
              icon: 'arrow_downward',
              date: '16-05-2023',
              amount: 'EGP500',
              type: 'Purchase',
              transNumber: '5A84345T6',
              account: 'Gas Company',
            },
            {
              cardNumber: '**** **** **** 1234',
              icon: 'arrow_downward',
              date: '10-05-2023',
              amount: 'EGP1050',
              type: 'Purchase',
              transNumber: '4233FF456',
              account: 'Carefour',
            },
            {
              cardNumber: '**** **** **** 1234',
              icon: 'arrow_upward',
              date: '09-05-2023',
              amount: 'EGP2400',
              type: 'Refund',
              transNumber: '542K345D6',
              account: 'Amazon.com',
            },
            {
              cardNumber: '**** **** **** 1234',
              icon: 'arrow_downward',
              date: '20-05-2023',
              amount: 'EGP400',
              type: 'Purchase',
              transNumber: '2K345H5D6',
              account: 'Internet Company',
            },
            {
              cardNumber: '**** **** **** 1234',
              icon: 'arrow_upward',
              date: '02-05-2023',
              amount: 'EGP300',
              type: 'Refund',
              transNumber: '3D3M495D6',
              account: 'ZARA',
            },
          ]}
        />
      </Card>
    </Fade>
  );
};

const invoiceList = [
  {
    _id: '5ece2cef3e562cbd61996dfds',
    date: new Date(),
    description: 'Bit Bass Headphone',
    method: 'PayPal',
    total: 15.25,
    status: 'paid',
  },
  {
    _id: '5ece2cef3efdsfsdfcbd61996',
    date: new Date(),
    description: 'Comlion Watch',
    method: 'Visa Card',
    total: 75.25,
    status: 'unpaid',
  },
  {
    _id: '5ece2cef3e56dsfdsfds61996',
    date: new Date(),
    description: 'Beats Headphone',
    method: 'Master Card',
    total: 45.25,
    status: 'paid',
  },
];
export default CustomerInvoice;
