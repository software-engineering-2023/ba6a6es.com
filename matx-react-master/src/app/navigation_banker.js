export const navigation_banker = [
  //DO NOT FORGET TO CHANGE THE PATH
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
  // { label: 'Components', type: 'label' },
  // {
  //   name: 'Components',
  //   icon: 'favorite',
  //   badge: { value: '30+', color: 'secondary' },
  //   children: [
  //     { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
  //     { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
  //     { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
  //     { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
  //     { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
  //     { name: 'Form', path: '/material/form', iconText: 'F' },
  //     { name: 'Icons', path: '/material/icons', iconText: 'I' },
  //     { name: 'Menu', path: '/material/menu', iconText: 'M' },
  //     { name: 'Progress', path: '/material/progress', iconText: 'P' },
  //     { name: 'Radio', path: '/material/radio', iconText: 'R' },
  //     { name: 'Switch', path: '/material/switch', iconText: 'S' },
  //     { name: 'Slider', path: '/material/slider', iconText: 'S' },
  //     { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
  //     { name: 'Table', path: '/material/table', iconText: 'T' },
  //   ],
  // },
  // {
  //   name: 'Charts',
  //   icon: 'trending_up',
  //   children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  // },
  // {
  //   name: 'Documentation',
  //   icon: 'launch',
  //   type: 'extLink',
  //   path: 'http://demos.ui-lib.com/matx-react-doc/',
  // },
  //{ label: 'Bank Account', type: 'label' },
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
  //{ label: 'Money Transfer', type: 'label' },
  // {
  //   name: 'Money Transfer',
  //   icon: 'attach_money',
  //   badge: { value: '', color: 'secondary' }, //TODO remove 3
  //   children: [
  //     { name: 'Personal Bank Transfer', path: '/material/bankTransfer/MakePersonalBankTransfer', iconText: 'B' },
  //     { name: 'Domestic Bank Transfer', path: '/material/bankTransfer/MakeDomesticBankTransfer', iconText: 'A' },
  //     { name: 'Regional Bank Transfer', path: '/material/bankTransfer/MakeRegionalBankTransfer', iconText: 'B' },
  //     { name: 'International Bank Transfer', path: '/material/bankTransfer/MakeInternationalBankTransfer', iconText: 'B' },

  //   ],
  // },
  //{ label: 'Credit Cards', type: 'label' },
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
