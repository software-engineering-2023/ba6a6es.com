import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./Analytics')));
const Analytics_banker = Loadable(lazy(() => import('./dashboard_test/Analytics_banker')));

const dashboardRoutes = [
  {
    path: '/dashboard/dashboard_test/default',
    element: <Analytics_banker />,
    auth: authRoles.admin,
  },
  { path: '/dashboard/default', element: <Analytics />, auth: authRoles.admin },
];

export default dashboardRoutes;
