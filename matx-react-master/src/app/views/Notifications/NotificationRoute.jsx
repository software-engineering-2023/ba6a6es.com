import Loadable from 'app/components/Loadable';
import ViewSpecificNotification from 'app/components/NotificationBar/ViewSpecificNotification';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';
import ViewSpecificTransaction from 'app/components/NotificationBar/ViewSpecificTransaction';

const ViewAllNotificationsPage = Loadable(lazy(() => import('app/components/NotificationBar/ViewAllNotificationsPage')));
const NotificationSpecificTable = Loadable(lazy(() => import('app/views/material-kit/tables/NotificationSpecificTable')));

const notificationRoute = [
  { path: '/dashboard/notification', element: <ViewAllNotificationsPage />, auth: authRoles.admin },
  { path: '/dashboard/notificationDetails', element: <ViewSpecificNotification />, auth: authRoles.admin },
  { path: '/dashboard/transactionDetails', element: <ViewSpecificTransaction />, auth: authRoles.admin },

];

export default notificationRoute;