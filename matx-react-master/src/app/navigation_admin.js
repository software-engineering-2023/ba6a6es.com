export const navigation_admin = [
  // TODO: DO NOT FORGET TO CHANGE THE PATH
  { name: 'Dashboard', path: '/dashboard/dashboard_test2/default', icon: 'dashboard' },
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
    name: 'Technical Issues',
    icon: 'account_balance_wallet',
    badge: { value: '', color: 'secondary' }, //TODO remove 3
    children: [
      { name: 'Handle Technical Issues', path: '/material/bank/ViewBankAccount', iconText: 'B' },
    ],
  },
];
