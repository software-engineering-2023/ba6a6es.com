import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./Analytics')));

const dashboardRoutes = [
  { path: '/dashboard/default', element: <Analytics />, auth: authRoles.admin },
 // {path:'/dashboard/default', element: <AnalyticsBanker />, auth: authRoles.banker'}
];

export default dashboardRoutes;
