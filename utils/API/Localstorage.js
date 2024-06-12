// utils/auth.js
export const getAuthData = () => {
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('authdata');
      return authData ? JSON.parse(authData) : null;
    }
    return null;
  };
  