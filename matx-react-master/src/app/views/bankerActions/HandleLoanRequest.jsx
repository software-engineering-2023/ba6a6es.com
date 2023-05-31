import { Divider, styled, Tab, Tabs } from '@mui/material';
import { Breadcrumb } from 'app/components';
import { useState } from 'react';
import CustomerDetails from './LoanRequestStuff/CustomerDetails';
import CustomerInvoice from './LoanRequestStuff/CustomerInvoice';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
}));

const HandleCardReport = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (e, value) => setTabIndex(value);

  return (
    <Container>
      <div className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Loan Request' }]} />
      </div>
      <Tabs
        sx={{ mt: 2 }}
        value={tabIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {tabList.map((item, ind) => (
          <Tab key={ind} value={ind} label={item} sx={{ textTransform: 'capitalize' }} />
        ))}
      </Tabs>
      <Divider sx={{ mb: '24px' }} />

      {tabIndex === 0 && <CustomerDetails />}
      {tabIndex === 1 && <CustomerInvoice />}
    </Container>
  );
};

const tabList = ['Client Details', 'Previous Loans'];

export default HandleCardReport;
