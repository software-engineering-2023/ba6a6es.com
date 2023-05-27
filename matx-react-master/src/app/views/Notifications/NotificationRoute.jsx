import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const ViewAllNotificationsPage = Loadable(lazy(() => import('app/components/NotificationBar/ViewAllNotificationsPage')));

const notificationRoute = [
  { path: '/dashboard/notification', element: <ViewAllNotificationsPage />, auth: authRoles.admin },
];

export default notificationRoute;