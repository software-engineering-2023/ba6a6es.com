import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./Analytics')));
const Analytics_banker = Loadable(lazy(() => import('./dashboard_test/Analytics_banker')));
const Analytics_admin = Loadable(lazy(() => import('./dashboard_test2/Analytics_admin')));

const dashboardRoutes = [
  {
    path: '/dashboard/dashboard_test/default',
    element: <Analytics_banker />,
    auth: authRoles.admin,
  },
  {
    path: '/dashboard/dashboard_test2/default',
    element: <Analytics_admin />,
    auth: authRoles.admin,
  },
  { path: '/dashboard/default', element: <Analytics />, auth: authRoles.admin },
];

export default dashboardRoutes;
