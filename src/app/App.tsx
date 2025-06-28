import { AppHeader } from '@/features/header';
import { Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from '@/shared/model/routes';
function App() {
  const location = useLocation();
  console.log(location);
  const isAuthPage = location.pathname === ROUTES.REGISTER || location.pathname === ROUTES.LOGIN;
  return (
    <>
      {!isAuthPage && <AppHeader />}
      <Outlet />
    </>
  );
}

export default App;
