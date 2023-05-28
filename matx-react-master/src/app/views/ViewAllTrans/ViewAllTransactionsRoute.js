import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const ViewAllTrasactions = Loadable(lazy(() => import('./ViewAllTrasactions')));

const ViewAllTrasactionsRoute = [
  { path: '/ViewAllTrasactions', element: <ViewAllTrasactions />, auth: authRoles.admin },
];

export default ViewAllTrasactionsRoute;
