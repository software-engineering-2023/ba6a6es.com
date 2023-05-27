import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const ViewRedeemPoints = Loadable(lazy(() => import('./ViewRedeemPoints')));

const PointsRoute = [
  { path: '/viewredeempoints', element: <ViewRedeemPoints />, auth: authRoles.admin },
];

export default PointsRoute;
