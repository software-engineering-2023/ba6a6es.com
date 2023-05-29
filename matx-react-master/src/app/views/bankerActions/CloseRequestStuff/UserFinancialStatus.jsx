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
import TransactionTable from './TransactionTable';

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

const UserFinancialStatus = () => {
  return (
    <Fade in timeout={300}>
      <Card elevation={3} sx={{ width: '100%', overflow: 'auto' }}>
        <TransactionTable
          subscribarList={[
            {
              id: '#1',
              type: 'CreditCard',
              num: '4536***********9876',
              description: '2020-2022',
              status: 'unactive',
            },
            {
              id: '#2',
              type: 'Loan',
              num: 'loan#122234',
              description: '2021-2026',
              status: 'active',
            },
            {
              id: '#3',
              type: 'Bank Account',
              num: '10009876543',
              description: '2020-present',
              status: 'active/Saving',
            },
          ]}
        />
      </Card>
    </Fade>
  );
};
export default UserFinancialStatus;
