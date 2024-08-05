import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { useDispatch } from 'react-redux';
import { logoutuser } from '../../store/actions/UsersAction';
// import { getAuthData } from '../../utils/API/Localstorage';

const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const authData = getCookie("authtoken");

  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthentication = async () => {
      const platformChoose = localStorage.getItem("platform-choose")

      if (authData && platformChoose === 'true') {
        await router.push("/login/1");
        return;
      }

      if (!authData) {
        await router.push('/login');
        dispatch(logoutuser())

} else {
  const isAdmin = getCookie('isAdmin');
// Check if the user is an admin
if (isAdmin === 'true') {
  // Admin has access to all routes, no need to check further
  setIsLoading(false);
  return;
}

// Check if the current route starts with "/longterm/dashboard"
const currentRoute = router.pathname;
if (!currentRoute.startsWith('/longterm/dashboard')) {
  await router.push('/longterm/dashboard');
} else {
  setIsLoading(false);
}
      }
    };

checkAuthentication();
  }, [authData, router]);

if (isLoading) {
  return <div>Loading...</div>; // Or any other loading indicator
}

return <>{children}</>;
};

export default ProtectedRoutes;
