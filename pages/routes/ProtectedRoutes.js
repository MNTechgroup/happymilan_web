// components/ProtectedRoute.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getCookie } from 'cookies-next'

const ProtectedRoutes = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("jwtToken");
   

    if (!token) {
      // Redirect to the login page if the token is not present
      router.push('/login');
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoutes;
