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
const CloseAccountRequests = Loadable(lazy(() => import('./banker/CloseAccountRequests')));
const OpenAccountRequests = Loadable(lazy(() => import('./banker/OpenAccountRequests')));
const CreditCardReports = Loadable(lazy(() => import('./banker/CreditCardReports')));
const CreditCardRequests = Loadable(lazy(() => import('./banker/CreditCardRequests')));
const LoanRequests = Loadable(lazy(() => import('./banker/LoanRequests')));
const SendBankAnnouncements = Loadable(lazy(() => import('./banker/SendBankAnnouncements')));
const CreditCardGuide = Loadable(lazy(() => import('../banker_criteria/CreditCardGuide')));
const HandleTechnicalIssues = Loadable(lazy(() => import('../adminActions/HandleTechnicalIssues')));
const HandleCardReport = Loadable(lazy(() => import('../bankerActions/HandleCardReport')));
const HandleCardRequest = Loadable(lazy(() => import('../bankerActions/HandleCardRequest')));
const HandleCloseRequest = Loadable(lazy(() => import('../bankerActions/HandleCloseRequest')));
const HandleLoanRequest = Loadable(lazy(() => import('../bankerActions/HandleLoanRequest')));
const HandleOpenRequest = Loadable(lazy(() => import('../bankerActions/HandleOpenRequest')));
const ReportTechnicalIssue = Loadable(lazy(() => import('./technicalIssue/ReportTechnicalIssue')));

const materialRoutes = [
  {
    path: '/table',
    element: <AppTable />,
  },
  {
    path: '/form',
    element: <AppForm />,
  },
  {
    path: '/buttons',
    element: <AppButton />,
  },
  {
    path: '/icons',
    element: <AppIcon />,
  },
  {
    path: '/progress',
    element: <AppProgress />,
  },
  {
    path: '/menu',
    element: <AppMenu />,
  },
  {
    path: '/checkbox',
    element: <AppCheckbox />,
  },
  {
    path: '/switch',
    element: <AppSwitch />,
  },
  {
    path: '/radio',
    element: <AppRadio />,
  },
  {
    path: '/slider',
    element: <AppSlider />,
  },
  {
    path: '/autocomplete',
    element: <AppAutoComplete />,
  },
  {
    path: '/expansion-panel',
    element: <AppExpansionPanel />,
  },
  {
    path: '/dialog',
    element: <AppDialog />,
  },
  {
    path: '/snackbar',
    element: <AppSnackbar />,
  },
  {
    path: '/bank/OpenBankAccount',
    element: <OpenBankAccount />,
  },

  {
    path: '/bank/CloseBankAccount',
    element: <CloseBankAccount />,
  },
  {
    path: '/bank/ViewBankAccount',
    element: <ViewBankAccount />,
  },
  {
    path: '/bankTransfer/MakeInternationalBankTransfer',
    element: <MakeInternationalBankTransfer />,
  },
  {
    path: '/creditCard/ViewCreditCard',
    element: <ViewCreditCard />,
  },

  {
    path: '/loans/ApplyLoan',
    element: <ApplyLoan />,
  },
  {
    path: '/loans/ViewLoans',
    element: <ViewLoans />,
  },
  {
    path: '/bankTransfer/MakePersonalBankTransfer',
    element: <MakePersonalBankTransfer />,
  },
  {
    path: '/bankTransfer/MakeRegionalBankTransfer',
    element: <MakeRegionalBankTransfer />,
  },
  {
    path: '/bankTransfer/MakeDomesticBankTransfer',
    element: <MakeDomesticBankTransfer />,
  },

  {
    path: '/bills/ViewBill',
    element: <ViewBill />,
  },

  {
    path: '/creditCard/ApplyCreditCard',
    element: <ApplyCreditCard />,
  },
  {
    path: '/creditCard/ReportCreditCard',
    element: <ReportCreditCard />,
  },
  {
    path: '/creditCard/ViewCreditCard',
    element: <ViewCreditCard />,
  },
  {
    path: '/creditCard/CreditCardTransactions',
    element: <CreditCardTransactions />,
  },

  {
    path: '/loans/ApplyLoan',
    element: <ApplyLoan />,
  },
  {
    path: '/loans/ViewLoans',
    element: <ViewLoans />,
  },
  {
    path: '/points/ViewRedeemPoints',
    element: <ViewRedeemPoints />,
  },

  {
    path: '/ViewAllTrans/ViewAllTransactions',
    element: <ViewAllTransactions />,
  },
  {
    path: '/Settings/SettingsPage',
    element: <SettingsPage />,
  },
  {
    path: '/Settings/PasswordPage',
    element: <PasswordPage />,
  },
  {
    path: '/faq/FAQPage',
    element: <FAQPage />,
  },
  {
    path: '/banker_criteria/OpenBank',
    element: <OpenBank />,
  },
  {
    path: '/banker_criteria/CloseBank',
    element: <CloseBank />,
  },
  {
    path: '/banker_criteria/LoanGuide',
    element: <LoanGuide />,
  },
  {
    path: '/banker_criteria/CreditCardGuide',
    element: <CreditCardGuide />,
  },
  {
    path: '/banker/OpenAccountRequests',
    element: <OpenAccountRequests />,
  },
  {
    path: '/banker/CloseAccountRequests',
    element: <CloseAccountRequests />,
  },
  {
    path: '/banker/CreditCardRequests',
    element: <CreditCardRequests />,
  },
  {
    path: '/banker/LoanRequests',
    element: <LoanRequests />,
  },
  {
    path: '/banker/CreditCardReports',
    element: <CreditCardReports />,
  },
  {
    path: '/banker/SendBankAnnouncements',
    element: <SendBankAnnouncements />,
  },
  {
    path: '/banker/SendBankAnnouncements',
    element: <SendBankAnnouncements />,
  },
  {
    path: '/admin/HandleTechnicalIssues',
    element: <HandleTechnicalIssues />,
  },
  {
    path: '/bankerActions/HandleCardReport',
    element: <HandleCardReport />,
  },
  {
    path: '/bankerActions/HandleCardRequest',
    element: <HandleCardRequest />,
  },
  {
    path: '/bankerActions/HandleCloseRequest',
    element: <HandleCloseRequest />,
  },
  {
    path: '/bankerActions/HandleLoanRequest',
    element: <HandleLoanRequest />,
  },
  {
    path: '/bankerActions/HandleOpenRequest',
    element: <HandleOpenRequest />,
  },
  {
    path: '/technicalIssue/ReportTechnicalIssue',
    element: <ReportTechnicalIssue />,
  },
];
export default materialRoutes;
