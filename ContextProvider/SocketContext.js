import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { getCookie } from 'cookies-next';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const token = getCookie("authtoken");

  useEffect(() => {
    if (token) {
      const newSocket = io.connect(`https://happymilan.tech`, {
        path: '/api/socket.io',
        query: { token: token }
      });

      newSocket.on('connect', () => {
        console.log('Connected to socket');
      });

      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    }
  }, [token]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
