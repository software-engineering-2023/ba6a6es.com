import { Fade, Grid } from '@mui/material';
import CardInfo from './LoanInfo';
import CustomerInfo from './CustomerInfo';
import CreditInfo from './CreditInfo';

const CustomerDetails = () => {
  return (
    <Fade in timeout={300}>
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <CustomerInfo />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CardInfo />
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <CreditInfo />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default CustomerDetails;
