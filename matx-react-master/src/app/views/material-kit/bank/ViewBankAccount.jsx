import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import ViewBankAccountTable from 'app/views/material-kit/tables/ViewBankAccountTable';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const ViewBankAccount = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[{ name: 'Material', path: '/material' }, { name: 'View Bank Account' }]}
        />
      </Box>

      <SimpleCard title="View Bank Account Table">
        <ViewBankAccountTable />
      </SimpleCard>
    </Container>
  );
};

export default ViewBankAccount;
