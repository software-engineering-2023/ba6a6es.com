export const navigations = [
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
    name: 'Bank Account',
    icon: 'account_balance_wallet',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      { name: 'View Bank Account', path: '/material/bank/ViewBankAccount', iconText: 'B' },
      { name: 'Open Bank Account', path: '/material/bank/OpenBankAccount', iconText: 'A' },
      { name: 'Close Bank Account', path: '/material/bank/CloseBankAccount', iconText: 'B' },
    ],
  },
  //{ label: 'Money Transfer', type: 'label' },
  {
    name: 'Money Transfer',
    icon: 'attach_money',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      {
        name: 'Personal Bank Transfer',
        path: '/material/bankTransfer/MakePersonalBankTransfer',
        iconText: 'B',
      },
      {
        name: 'Domestic Bank Transfer',
        path: '/material/bankTransfer/MakeDomesticBankTransfer',
        iconText: 'A',
      },
      {
        name: 'Regional Bank Transfer',
        path: '/material/bankTransfer/MakeRegionalBankTransfer',
        iconText: 'B',
      },
      {
        name: 'International Bank Transfer',
        path: '/material/bankTransfer/MakeInternationalBankTransfer',
        iconText: 'B',
      },
    ],
  },
  //{ label: 'Credit Cards', type: 'label' },
  {
    name: 'Credit Cards',
    icon: 'credit_card',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      { name: 'View/Pay', path: '/material/creditCard/ViewPayCreditCard', iconText: 'B' },
      { name: 'Apply', path: '/material/creditCard/ApplyCreditCard', iconText: 'A' },
      { name: 'Report', path: '/material/creditCard/ReportCreditCard', iconText: 'B' },
    ],
  },
  //{ label: 'Loans', type: 'label' },
  {
    name: 'Loans',
    icon: 'account_balance',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      { name: 'View/Pay', path: '/material/loans/ViewPayLoans', iconText: 'B' },
      { name: 'Apply', path: '/material/loans/ApplyLoan', iconText: 'A' },
    ],
  },
  //{ label: 'Bills', type: 'label' },
  {
    name: 'Bills',
    icon: 'money',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      { name: 'View/Pay/Set Reminder', path: '/material/bills/ViewPaySetBill', iconText: 'B' },
    ],
  },
  //{ label: 'Points', type: 'label' },
  {
    name: 'Points',
    icon: 'star',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [{ name: 'View/Redeem', path: '/material/points/ViewRedeemPoints', iconText: 'B' }],
  },
];
