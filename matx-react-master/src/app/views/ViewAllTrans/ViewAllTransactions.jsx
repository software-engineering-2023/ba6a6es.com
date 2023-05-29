import { Card, Grid, styled, useTheme, Button, Box } from '@mui/material';
import { Fragment } from 'react';
import { Breadcrumb } from 'app/components';

import { Span } from 'app/components/Typography';
import Icon from '@mui/material';
import TransactionTable from '../material-kit/tables/TransactionTable';

const Transactions = () => {
  return (
    <Card sx={{ px: 3, py: 2, mb: 3 }}>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Transactions' }]}
        />
      </Box>
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
