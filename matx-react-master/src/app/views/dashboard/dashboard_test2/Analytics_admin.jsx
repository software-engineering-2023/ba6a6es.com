import { Card, Grid, styled, useTheme, Button, Icon } from '@mui/material';
import { Fragment } from 'react';
import StatCards from '../shared/StatCards';
import StatCards2 from '../shared/StatCards2';
import { Span } from 'app/components/Typography';
import { Link } from 'react-router-dom';
import { Title } from '@mui/icons-material';
import { Subtitles } from '@mui/icons-material';
import LineChart from 'app/views/charts/echarts/LineChart';
import { H2 } from 'app/components/Typography';

const Analytics_admin = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Card sx={{ px: 3, py: 2, mb: 3 }}>
          <H2 style={{ marginBottom: '15px' }}>ADMIN</H2>
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
      </Grid>
    </Fragment>
  );
};

export default Analytics_admin;
