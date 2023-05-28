import { Card, Grid, styled, useTheme, Button } from '@mui/material';
import { Fragment } from 'react';

//import SimpleTable from '../material-kit/tables/SimpleTable';
import { Span } from 'app/components/Typography';
import Icon from '@mui/material';
import TransactionTable from '../material-kit/tables/TransactionTable';

// const ContentBox = styled('div')(({ theme }) => ({
//   margin: '30px',
//   [theme.breakpoints.down('sm')]: { margin: '16px' },
// }));

// const Title = styled('span')(() => ({
//   fontSize: '1rem',
//   fontWeight: '500',
//   marginRight: '.5rem',
//   textTransform: 'capitalize',
// }));

// const SubTitle = styled('span')(({ theme }) => ({
//   fontSize: '0.875rem',
//   color: theme.palette.text.secondary,
// }));

// const H4 = styled('h4')(({ theme }) => ({
//   fontSize: '1rem',
//   fontWeight: '500',
//   marginBottom: '16px',
//   textTransform: 'capitalize',
//   color: theme.palette.text.secondary,
// }));

const Transactions = () => {
  // const { palette } = useTheme();

  return (
    <Card sx={{ px: 3, py: 2, mb: 3 }}>
      <TransactionTable
        subscribarList={[
          {
            // name: 'john doe',
            icon: 'arrow_downward',
            date: '18-5-2023',
            amount: 1000,
            type: 'Bill(Water)',
          },
          {
            //name: 'kessy bryan',
            icon: 'arrow_downward',
            date: '18-5-2023',
            amount: 9000,
            type: 'Transfer(local)',
            // company: 'My Fintech LTD.',
          },
          {
            //name: 'james cassegne',
            icon: 'arrow_upward',
            date: '16-5-2023',
            amount: 500,
            type: 'Debited(Cash)',
            // company: 'Collboy Tech LTD.',
          },
          {
            //name: 'lucy brown',
            icon: 'arrow_upward',
            date: '10-5-2023',
            amount: 1050,
            type: 'Debited(Cash)',
            // company: 'ABC Fintech LTD.',
          },
          {
            //name: 'lucy brown',
            icon: 'arrow_downward',
            date: '9-5-2023',
            amount: 10800,
            type: 'Credited(PayPal)',
            // company: 'ABC Fintech LTD.',
          },
          // {
          //   //name: 'lucy brown',
          //   date: '18-5-2023',
          //   amount: 89000,
          //   status: 'open',
          //   company: 'ABC Fintech LTD.',
          // },
        ]}
      />
    </Card>
  );
};

export default Transactions;
