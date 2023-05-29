import { Card, Grid, styled, useTheme, Button, Icon } from '@mui/material';
import { Fragment } from 'react';
import StatCards from '../shared/StatCards';
import StatCards2 from '../shared/StatCards2';
import { Span } from 'app/components/Typography';
import { Link } from 'react-router-dom';
import { Title } from '@mui/icons-material';
import { Subtitles } from '@mui/icons-material';
import LineChart from './LineChart';
import DoughnutChart from '../shared/Doughnut';
import TransactionTable from './TransactionTable';
import { H2 } from 'app/components/Typography';

const Analytics_banker = () => {
  const { palette } = useTheme();
  return (
    <Grid container spacing={3}>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        {/* /* <TopSellingTable /> */}

        {/* <H4>Recent Transaction</H4> */}
        <Card sx={{ px: 3, py: 2, mb: 3 }}>
          <H2 style={{ marginBottom: '15px' }}>Recent Requests and Report</H2>

          <TransactionTable
            subscribarList={[
              {
                // name: 'john doe',
                id: '#1010',
                Date: '18/5/2023',
                type: 'Open Acc',
                state: 'Pending',
                text: 'Check ',
              },
              {
                //name: 'kessy bryan',
                id: '#1011',
                Date: '17/5/2023',
                type: 'Close Acc',
                state: 'Pending',
                text: 'Check ',

                // company: 'My Fintech LTD.',
              },
              {
                //name: 'james cassegne',
                id: '#1012',
                Date: '16/5/2023',
                type: 'CreditCard',
                state: 'Pending',
                text: 'Check ',
                // company: 'Collboy Tech LTD.',
              },
              {
                //name: 'lucy brown',
                id: '#2011',
                Date: '15/5/2023',
                type: 'CardReport',
                state: 'Pending',
                text: 'Check ',

                // company: 'ABC Fintech LTD.',
              },
              {
                //name: 'lucy brown',
                id: '#1013',
                Date: '15/5/2023',
                type: 'Loan',
                state: 'Pending',
                text: 'Check',
                // company: 'ABC Fintech LTD.',
              },
              {
                //name: 'lucy brown',
                id: '#1014',
                Date: '10/5/2023',
                type: 'CreditCard',
                state: 'Handled',
                text: 'Check ',

                // company: 'ABC Fintech LTD.',
              },
              {
                id: '#2022',
                Date: '9/5/2023',
                type: 'CardReport',
                state: 'Handled',
                text: 'Check',
              },

              {
                id: '#1099',
                Date: '7/5/2023',
                type: 'Loan',
                state: 'Handled',
                text: 'Check ',
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
        {/* <StatCards2 /> */}
        {/* <H4>Ongoing Projects</H4> */}
        {/* <RowCards /> */}
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Card sx={{ px: 3, py: 2, mb: 3 }}>
          <H2 style={{ marginBottom: '15px' }}>Currency Insights</H2>
          <LineChart
            height="350px"
            color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
          />
        </Card>
        <Card sx={{ px: 3, py: 2, mb: 3 }}>
          <H2 style={{ marginBottom: '9px' }}>Useful Links</H2>
          <Button
            color="primary"
            variant="text"
            type="submit"
            component={Link}
            to="/material/banker_criteria/OpenBank"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Open/Close Account Criteria </Span>
          </Button>
          {/* <Button
            color="primary"
            variant="text"
            type="submit"
            component={Link}
            to="/material/banker_criteria/CloseBank"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Close Account Criteria </Span>
          </Button>  */}
          <Button
            color="primary"
            variant="text"
            type="submit"
            component={Link}
            to="/material/banker_criteria/LoanGuide"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Loans Criteria</Span>
          </Button>
          <Button
            color="primary"
            variant="text"
            type="submit"
            component={Link}
            to="/material/banker_criteria/CreditCardGuide"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Credit Card Criteria</Span>
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Analytics_banker;

{
  /* <Grid item lg={8} md={8} sm={12} xs={12}>
        <Card sx={{ px: 3, py: 2, mb: 3 }}>
          <H2 style={{ marginBottom: '15px' }}>Currency Insights</H2>
          <LineChart
            height="350px"
            color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
          />
        </Card>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Card sx={{ px: 3, py: 2, mb: 3 }}>
          <H2 style={{ marginBottom: '15px' }}>You might need</H2>
          <Button
            color="primary"
            variant="text"
            type="submit"
            component={Link}
            to="/material/banker_criteria/OpenBank"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Open Account Criteria </Span>
          </Button>
          <Button
            color="primary"
            variant="text"
            type="submit"
            component={Link}
            to="/material/banker_criteria/CloseBank"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Close Account Criteria </Span>
          </Button>
          <Button
            color="primary"
            variant="text"
            type="submit"
            component={Link}
            to="/material/banker_criteria/LoanGuide"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Loans Criteria</Span>
          </Button>
          <Button
            color="primary"
            variant="text"
            type="submit"
            component={Link}
            to="/material/banker_criteria/CreditCardGuide"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Credit Card Criteris</Span>
          </Button>
        </Card>
      </Grid> */
}
