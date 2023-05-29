import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import OpenBankAccountRequestsTable from 'app/views/material-kit/tables/OpenBankAccountRequestsTable';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const OpenAccountRequests = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: 'Requests', path: '/banker/OpenAccountRequests' },
            { name: 'Table' },
          ]}
        />
      </Box>

      <SimpleCard title="Open Account Requests Table">
        <OpenBankAccountRequestsTable />
      </SimpleCard>
    </Container>
  );
};

export default OpenAccountRequests;
