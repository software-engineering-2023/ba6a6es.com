import { Stack } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import MakePersonalBankTransferForm from 'app/views/material-kit/forms/MakePersonalBankTransferForm';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const MakePersonalBankTransfer = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Form' }]} />
      </Box>

      <Stack spacing={3}>
        <h3>Transfer to your accounts</h3>
        <SimpleCard title="Make Personal Bank Transfer Form">
          <MakePersonalBankTransferForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default MakePersonalBankTransfer;
