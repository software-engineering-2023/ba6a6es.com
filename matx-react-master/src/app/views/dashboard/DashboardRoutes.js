import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./dashboard_client/Analytics')));
const Analytics_banker = Loadable(lazy(() => import('./dashboard_banker/Analytics_banker')));
const Analytics_admin = Loadable(lazy(() => import('./dashboard_admin/Analytics_admin')));

const dashboardRoutes = [
  {
    path: '/dashboard/banker/default',
    element: <Analytics_banker />,
    auth: authRoles.admin,
  },
  {
    path: '/dashboard/admin/default',
    element: <Analytics_admin />,
    auth: authRoles.admin,
  },
  { path: '/dashboard/client/default', element: <Analytics />, auth: authRoles.admin },
];

export default dashboardRoutes;
