import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const SettingsPage = Loadable(lazy(() => import('./SettingsPage')));

const SettingsRoute = [{ path: '/SettingsPage', element: <SettingsPage />, auth: authRoles.admin }];

export default SettingsRoute;
