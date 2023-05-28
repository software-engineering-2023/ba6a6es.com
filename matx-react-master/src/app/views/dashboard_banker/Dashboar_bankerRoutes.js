import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics_banker = Loadable(lazy(() => import('./Analytics_banker')));

const dashboardRoutes_banker = [
  { path: '/dashboard_banker/default', element: <Analytics_banker />, auth: authRoles.admin },
  // {path:'/dashboard/default', element: <AnalyticsBanker />, auth: authRoles.banker'}
];

export default dashboardRoutes_banker;
