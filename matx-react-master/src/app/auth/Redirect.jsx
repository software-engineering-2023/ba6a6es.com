import { Navigate, useLocation } from 'react-router-dom';
import CurrentUserType from 'app/CurrentUserType';

const Redirect = () => {
  let location = useLocation();

  // Get redirect location or provide fallback
  const from =
    location.state?.from || CurrentUserType.getUserType() === 'client'
      ? '/dashboard/client/default'
      : CurrentUserType.getUserType() === 'banker'
      ? '/dashboard/banker/default'
      : CurrentUserType.getUserType() === 'admin'
      ? '/dashboard/admin/default'
      : '/';

  // in auth callback logic, once authenticated navigate (redirect) back
  // to the route originally being accessed.
  return <Navigate to={from} />;
};

export default Redirect;
