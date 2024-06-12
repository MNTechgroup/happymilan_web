import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { getAuthData } from '../../utils/API/Localstorage';

const ProtectedRoutes = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const authData = getCookie("authtoken");

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!authData) {
        await router.push('/login');
      } else {
        const isAdmin = getCookie('isAdmin');
        // Check if the user is an admin
        if (isAdmin === 'true') {
          // Admin has access to all routes, no need to check further
          setIsLoading(false);
          return;
        }
        
        // Check if the current route starts with "/dashboard"
        const currentRoute = router.pathname;
        if (!currentRoute.startsWith('/dashboard')) {
          await router.push('/dashboard');
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
