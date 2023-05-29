export const navigation_banker = [
  // TODO: DO NOT FORGET TO CHANGE THE PATH
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'PAGES', type: 'label' },
  {
    name: 'Session/Auth',
    icon: 'security',
    children: [
      { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Error', iconText: '404', path: '/session/404' },
    ],
  },
  {
    name: ' Bank Account Requests',
    icon: 'account_balance_wallet',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      { name: 'Open Account Requests', path: '/material/bank/ViewBankAccount', iconText: 'B' },
      { name: 'Close Account Requests', path: '/material/bank/OpenBankAccount', iconText: 'A' },
      // { name: 'Close Bank Account', path: '/material/bank/CloseBankAccount', iconText: 'B' },
    ],
  },
  {
    name: 'Credit Card Requests',
    icon: 'credit_card',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      {
        name: 'Check  Credit Card Requests',
        path: '/material/creditCard/ViewPayCreditCard',
        iconText: 'B',
      },
      // { name: 'Apply', path: '/material/creditCard/ApplyCreditCard', iconText: 'A' },
      // { name: 'Report', path: '/material/creditCard/ReportCreditCard', iconText: 'B' },
    ],
  },
  //{ label: 'Loans', type: 'label' },
  {
    name: 'Loans Requests',
    icon: 'account_balance',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      { name: 'Check Loan Requests', path: '/material/loans/ViewPayLoans', iconText: 'B' },
      // { name: 'Apply', path: '/material/loans/ApplyLoan', iconText: 'A' },
    ],
  },
  //{ label: 'Bills', type: 'label' },
  {
    name: 'Credit Card Reports',
    icon: 'report',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      { name: 'Check Credit Card Reports', path: '/material/bills/ViewPaySetBill', iconText: 'B' },
    ],
  },
  //{ label: 'Points', type: 'label' },
  {
    name: 'Send Bank Announcements',
    icon: 'edit',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      { name: 'Send new announcement', path: '/material/points/ViewRedeemPoints', iconText: 'B' },
    ],
  },
];
