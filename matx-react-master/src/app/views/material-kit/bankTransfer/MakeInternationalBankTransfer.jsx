import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import MakeInternationalBankTransferForm from 'app/views/material-kit/forms/MakeInternationalBankTransferForm';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const MakeInternationalBankTransfer = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Form' }]} />
      </Box>

      <Stack spacing={3}>
        <h3>Transfer Internationally</h3>
        <SimpleCard title="Make International Bank Transfer Form">
          <MakeInternationalBankTransferForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default MakeInternationalBankTransfer;
