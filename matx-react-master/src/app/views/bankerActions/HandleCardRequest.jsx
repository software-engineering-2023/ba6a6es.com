// import { Divider, styled, Tab, Tabs } from '@mui/material';
// import { Breadcrumb } from 'app/components';
// import { useState } from 'react';
// import CustomerDetails from './CustomerDetails';
// import CustomerInvoice from './CustomerInvoice';
// import CustomerLogs from './CustomerLogs';
// import UserPersonalInfo from './CardReqStuff/UserPersonalInfo';
// import UserFinancialStatus from './CardReqStuff/UserFinancialStatus';
// import CustomerBillings from './CardReqStuff/CustomerBillings';

// const Container = styled('div')(({ theme }) => ({
//   margin: '30px',
//   [theme.breakpoints.down('sm')]: { margin: '16px' },
//   '& .breadcrumb': {
//     marginBottom: '30px',
//     [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
//   },
// }));

// const CustomerViewer = () => {
//   const [tabIndex, setTabIndex] = useState(0);

//   const handleTabChange = (e, value) => setTabIndex(value);

//   return (
//     <Container>
//       <div className="breadcrumb">
//         <Breadcrumb
//           routeSegments={[{ name: 'Pages', path: '/pages' }, { name: 'View Customer' }]}
//         />
//       </div>
//       <Tabs
//         sx={{ mt: 2 }}
//         value={tabIndex}
//         onChange={handleTabChange}
//         indicatorColor="primary"
//         textColor="primary"
//       >
//         {tabList.map((item, ind) => (
//           <Tab key={ind} value={ind} label={item} sx={{ textTransform: 'capitalize' }} />
//         ))}
//       </Tabs>
//       <Divider sx={{ mb: '24px' }} />

//       {tabIndex === 0 && <CustomerDetails />}
//       {tabIndex === 1 && <CustomerInvoice />}
//       {/* {tabIndex === 2 && <CustomerLogs />} */}
//     </Container>
//   );
// };

// const tabList = ['Personal Info', 'Other Credit Cards/Loans'];

// export default CustomerViewer;
