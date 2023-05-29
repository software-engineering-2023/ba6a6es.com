import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import CloseBankAccountRequestsTable from 'app/views/material-kit/tables/CloseBankAccountRequestsTable';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const CloseAccountRequests = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: 'Close Account Requests', path: '/banker/CloseAccountRequests' },
            { name: 'Table' },
          ]}
        />
      </Box>

      <SimpleCard title="Close Account Requests Table">
        <CloseBankAccountRequestsTable />
      </SimpleCard>
    </Container>
  );
};

export default CloseAccountRequests;
