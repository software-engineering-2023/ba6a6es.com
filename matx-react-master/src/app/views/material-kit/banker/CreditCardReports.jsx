import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import CreditCardReportsTable from 'app/views/material-kit/tables/CreditCardReportsTable';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const CreditCardReports = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: 'Credit Card Reports', path: '/banker/creditCardReports' },
            { name: 'Table' },
          ]}
        />
      </Box>

      <SimpleCard title="Credit Card Reports Table">
        <CreditCardReportsTable />
      </SimpleCard>
    </Container>
  );
};

export default CreditCardReports;
