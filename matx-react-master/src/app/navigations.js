export const navigations = [
  { name: 'Dashboard', path: '/dashboard/client/default', icon: 'dashboard' },
  { label: 'PAGES', type: 'label' },
  // {
  //   name: 'Session/Auth',
  //   icon: 'security',
  //   children: [
  //     { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
  //     { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
  //     { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
  //     { name: 'Error', iconText: '404', path: '/session/404' },
  //   ],
  // },
  {
    name: 'Bank Accounts',
    icon: 'account_balance_wallet',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      { name: 'View', path: '/bank/ViewBankAccount', iconText: 'B' },
      { name: 'Open A New Account', path: '/bank/OpenBankAccount', iconText: 'A' },
      { name: 'Close An Account', path: '/bank/CloseBankAccount', iconText: 'B' },
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
        path: '/bankTransfer/MakePersonalBankTransfer',
        iconText: 'B',
      },
      {
        name: 'Domestic Bank Transfer',
        path: '/bankTransfer/MakeDomesticBankTransfer',
        iconText: 'A',
      },
      {
        name: 'Regional Bank Transfer',
        path: '/bankTransfer/MakeRegionalBankTransfer',
        iconText: 'B',
      },
      {
        name: 'International Bank Transfer',
        path: '/bankTransfer/MakeInternationalBankTransfer',
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
      { name: 'View', path: '/creditCard/ViewCreditCard', iconText: 'B' },
      { name: 'Apply', path: '/creditCard/ApplyCreditCard', iconText: 'A' },
      { name: 'Report', path: '/creditCard/ReportCreditCard', iconText: 'B' },
      { name: 'Transactions', path: '/creditCard/CreditCardTransactions', iconText: 'A' },
    ],
  },
  //{ label: 'Loans', type: 'label' },
  {
    name: 'Loans',
    icon: 'account_balance',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      { name: 'View', path: '/loans/ViewLoans', iconText: 'B' },
      { name: 'Apply', path: '/loans/ApplyLoan', iconText: 'A' },
    ],
  },
  //{ label: 'Bills', type: 'label' },
  {
    name: 'Bills',
    icon: 'money',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [{ name: 'View', path: '/bills/ViewBill', iconText: 'B' }],
  },
  //{ label: 'Points', type: 'label' },
  {
    name: 'Points',
    icon: 'star',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [{ name: 'Redeem', path: '/points/ViewRedeemPoints', iconText: 'B' }],
  },
];
