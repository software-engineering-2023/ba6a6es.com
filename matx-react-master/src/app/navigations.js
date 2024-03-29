export const navigations = [
  { name: 'Dashboard', path: '/dashboard/client/default', icon: 'dashboard' },
  { label: 'PAGES', type: 'label' },
  // {
  //   name: 'Temp',
  //   icon: 'security',
  //   children: [{ name: 'customer', iconText: 'SI', path: '/pages/view-customer' }],
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
        name: 'Internal Account',
        path: '/bankTransfer/MakePersonalBankTransfer',
        iconText: 'B',
      },
      {
        name: 'Domestic Account',
        path: '/bankTransfer/MakeDomesticBankTransfer',
        iconText: 'A',
      },
      // {
      //   name: 'Regional Account',
      //   path: '/bankTransfer/MakeRegionalBankTransfer',
      //   iconText: 'B',
      // },
      {
        name: 'International Account',
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
