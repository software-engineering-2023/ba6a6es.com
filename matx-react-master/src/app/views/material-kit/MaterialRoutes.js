import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppTable = Loadable(lazy(() => import('./tables/AppTable')));
const AppForm = Loadable(lazy(() => import('./forms/AppForm')));
const AppButton = Loadable(lazy(() => import('./buttons/AppButton')));
const AppIcon = Loadable(lazy(() => import('./icons/AppIcon')));
const AppProgress = Loadable(lazy(() => import('./AppProgress')));
const AppMenu = Loadable(lazy(() => import('./menu/AppMenu')));
const AppCheckbox = Loadable(lazy(() => import('./checkbox/AppCheckbox')));
const AppSwitch = Loadable(lazy(() => import('./switch/AppSwitch')));
const AppRadio = Loadable(lazy(() => import('./radio/AppRadio')));
const AppSlider = Loadable(lazy(() => import('./slider/AppSlider')));
const AppDialog = Loadable(lazy(() => import('./dialog/AppDialog')));
const AppSnackbar = Loadable(lazy(() => import('./snackbar/AppSnackbar')));
const AppAutoComplete = Loadable(lazy(() => import('./auto-complete/AppAutoComplete')));
const AppExpansionPanel = Loadable(lazy(() => import('./expansion-panel/AppExpansionPanel')));
const OpenBankAccount = Loadable(lazy(() => import('./bank/OpenBankAccount')));
const CloseBankAccount = Loadable(lazy(() => import('./bank/CloseBankAccount')));
const ViewBankAccount = Loadable(lazy(() => import('./bank/ViewBankAccount')));
const MakeDomesticBankTransfer = Loadable(
  lazy(() => import('./bankTransfer/MakeDomesticBankTransfer'))
);
const MakeInternationalBankTransfer = Loadable(
  lazy(() => import('./bankTransfer/MakeInternationalBankTransfer'))
);
const MakePersonalBankTransfer = Loadable(
  lazy(() => import('./bankTransfer/MakePersonalBankTransfer'))
);
const MakeRegionalBankTransfer = Loadable(
  lazy(() => import('./bankTransfer/MakeRegionalBankTransfer'))
);
const ViewBill = Loadable(lazy(() => import('./bills/ViewBill')));
const ApplyCreditCard = Loadable(lazy(() => import('./creditCard/ApplyCreditCard')));
const ReportCreditCard = Loadable(lazy(() => import('./creditCard/ReportCreditCard')));
const ViewCreditCard = Loadable(lazy(() => import('./creditCard/ViewCreditCard')));
const CreditCardTransactions = Loadable(lazy(() => import('./creditCard/CreditCardTransactions')));
const ApplyLoan = Loadable(lazy(() => import('./loans/ApplyLoan')));
const ViewLoans = Loadable(lazy(() => import('./loans/ViewLoans')));
const ViewRedeemPoints = Loadable(lazy(() => import('../points/ViewRedeemPoints')));
const ViewAllTransactions = Loadable(lazy(() => import('../ViewAllTrans/ViewAllTransactions')));
const SettingsPage = Loadable(lazy(() => import('../Settings/SettingsPage')));
const PasswordPage = Loadable(lazy(() => import('../Settings/PasswordPage')));
const FAQPage = Loadable(lazy(() => import('../faq/FAQPage')));
const OpenBank = Loadable(lazy(() => import('../banker_criteria/OpenBank')));
const CloseBank = Loadable(lazy(() => import('../banker_criteria/CloseBank')));
const LoanGuide = Loadable(lazy(() => import('../banker_criteria/LoanGuide')));
const CreditCardGuide = Loadable(lazy(() => import('../banker_criteria/CreditCardGuide')));

const materialRoutes = [
  {
    path: '/material/table',
    element: <AppTable />,
  },
  {
    path: '/material/form',
    element: <AppForm />,
  },
  {
    path: '/material/buttons',
    element: <AppButton />,
  },
  {
    path: '/material/icons',
    element: <AppIcon />,
  },
  {
    path: '/material/progress',
    element: <AppProgress />,
  },
  {
    path: '/material/menu',
    element: <AppMenu />,
  },
  {
    path: '/material/checkbox',
    element: <AppCheckbox />,
  },
  {
    path: '/material/switch',
    element: <AppSwitch />,
  },
  {
    path: '/material/radio',
    element: <AppRadio />,
  },
  {
    path: '/material/slider',
    element: <AppSlider />,
  },
  {
    path: '/material/autocomplete',
    element: <AppAutoComplete />,
  },
  {
    path: '/material/expansion-panel',
    element: <AppExpansionPanel />,
  },
  {
    path: '/material/dialog',
    element: <AppDialog />,
  },
  {
    path: '/material/snackbar',
    element: <AppSnackbar />,
  },
  {
    path: '/material/bank/OpenBankAccount',
    element: <OpenBankAccount />,
  },

  {
    path: '/material/bank/CloseBankAccount',
    element: <CloseBankAccount />,
  },
  {
    path: '/material/bank/ViewBankAccount',
    element: <ViewBankAccount />,
  },
  {
    path: '/material/bankTransfer/MakeInternationalBankTransfer',
    element: <MakeInternationalBankTransfer />,
    path:'/material/creditCard/ViewCreditCard',
    element: <ViewCreditCard/>,
  },
  
  {
    path:'/material/loans/ApplyLoan',
    element: <ApplyLoan/>,
  },  
  {
    path:'/material/loans/ViewLoans',
    element: <ViewLoans/>,
  },
  {
    path: '/material/bankTransfer/MakePersonalBankTransfer',
    element: <MakePersonalBankTransfer />,
  },
  {
    path: '/material/bankTransfer/MakeRegionalBankTransfer',
    element: <MakeRegionalBankTransfer />,
  },
  {
    path: '/material/bankTransfer/MakeDomesticBankTransfer',
    element: <MakeDomesticBankTransfer />,
  },

  {
    path: '/material/bills/ViewBill',
    element: <ViewBill />,
  },

  {
    path: '/material/creditCard/ApplyCreditCard',
    element: <ApplyCreditCard />,
  },
  {
    path: '/material/creditCard/ReportCreditCard',
    element: <ReportCreditCard />,
  },
  {
    path: '/material/creditCard/ViewCreditCard',
    element: <ViewCreditCard />,
  },
  {
    path: '/material/creditCard/CreditCardTransactions',
    element: <CreditCardTransactions />,
  },

  {
    path: '/material/loans/ApplyLoan',
    element: <ApplyLoan />,
  },
  {
    path: '/material/loans/ViewLoans',
    element: <ViewLoans />,
  },
  {
    path: '/material/points/ViewRedeemPoints',
    element: <ViewRedeemPoints />,
  },

  {
    path: '/material/ViewAllTrans/ViewAllTransactions',
    element: <ViewAllTransactions />,
  },
  {
    path: '/material/Settings/SettingsPage',
    element: <SettingsPage />,
  },
  {
    path: '/material/Settings/PasswordPage',
    element: <PasswordPage />,
  },
  {
    path: '/material/faq/FAQPage',
    element: <FAQPage />,
  },
  {
    path: '/material/banker_criteria/OpenBank',
    element: <OpenBank />,
  },
  {
    path: '/material/banker_criteria/CloseBank',
    element: <CloseBank />,
  },
  {
    path: '/material/banker_criteria/LoanGuide',
    element: <LoanGuide />,
  },
  {
    path: '/material/banker_criteria/CreditCardGuide',
    element: <CreditCardGuide />,
  },
];

export default materialRoutes;
