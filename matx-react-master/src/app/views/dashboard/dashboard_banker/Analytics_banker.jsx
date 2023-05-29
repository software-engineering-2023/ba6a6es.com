import { Card, Grid, useTheme, Button } from '@mui/material';
import { Span, H2 } from 'app/components/Typography';
import { Link } from 'react-router-dom';
import LineChart from './LineChart';
import TransactionTable from './TransactionTable';

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
                // state: 'Pending',
                text: 'Check ',
                // prettier-ignore
                color: "primary",
                // prettier-ignore
                to: "/bankerActions/HandleOpenRequest",
              },
              {
                //name: 'kessy bryan',
                id: '#1011',
                Date: '17/5/2023',
                type: 'Close Acc',
                // state: 'Pending',
                text: 'Check ',
                // prettier-ignore
                color: "primary",
                // prettier-ignore
                to: "/bankerActions/HandleCloseRequest",
                /* eslint-enable */
              },
              {
                //name: 'james cassegne',
                id: '#1012',
                Date: '16/5/2023',
                type: 'CreditCard',
                // state: 'Pending',
                text: 'Check ',
                // prettier-ignore
                color: "primary",
                // prettier-ignore
                to: "/bankerActions/HandleCardRequest",
              },
              {
                //name: 'lucy brown',
                id: '#2011',
                Date: '15/5/2023',
                type: 'CardReport',
                // state: 'Pending',
                text: 'Check ',
                // prettier-ignore
                color: "primary",
                // prettier-ignore
                to: "/bankerActions/HandleCardReport",
                /* eslint-enable */
              },
              {
                //name: 'lucy brown',
                id: '#1013',
                Date: '15/5/2023',
                type: 'Loan',
                // state: 'Pending',
                text: 'Check',
                // prettier-ignore
                color: "primary",
                // prettier-ignore
                to: "/bankerActions/HandleLoanRequest",
                /* eslint-enable */
              },
              {
                //name: 'lucy brown',
                id: '#1014',
                Date: '10/5/2023',
                type: 'CreditCard',
                // state: 'Handled',
                text: 'Handled ',
                // prettier-ignore
                color: "inherit",
                // prettier-ignore
                to: "/bankerActions/HandleCardRequest",
                /* eslint-enable */
              },
              {
                id: '#2022',
                Date: '9/5/2023',
                type: 'CardReport',
                // state: 'Handled',
                text: 'Handled',
                // prettier-ignore
                color:  "inherit",
                // prettier-ignore
                to: "/bankerActions/HandleCardReport",
                /* eslint-enable */
              },

              {
                id: '#1099',
                Date: '7/5/2023',
                type: 'Loan',
                // state: 'Handled',
                text: 'Handled ',
                // prettier-ignore
                color: "inherit",
                // prettier-ignore
                to: "/bankerActions/HandleLoanRequest",
              },
            ]}
          />
        </Card>
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
            to="/banker_criteria/OpenBank"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Open/Close Account Criteria </Span>
          </Button>
          {/* <Button
            color="primary"
            variant="text"
            type="submit"
            component={Link}
            to="/banker_criteria/CloseBank"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Close Account Criteria </Span>
          </Button>  */}
          <Button
            color="primary"
            variant="text"
            type="submit"
            component={Link}
            to="/banker_criteria/LoanGuide"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Loans Criteria</Span>
          </Button>
          <Button
            color="primary"
            variant="text"
            type="submit"
            component={Link}
            to="/banker_criteria/CreditCardGuide"
          >
            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Credit Card Criteria</Span>
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Analytics_banker;
