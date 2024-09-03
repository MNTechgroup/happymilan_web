// contexts/SocketContext.js
import { getCookie } from 'cookies-next';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const UserActivityProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [isUserActive, setIsUserActive] = useState(true);

    useEffect(() => {
        const Token = getCookie("authtoken");
        const newSocket = io.connect(`https://happymilan.tech`, {
            path: '/api/socket.io',
            query: { token: Token }
        });

        newSocket.on('connect', () => {
            
        });
        setSocket(newSocket);


        newSocket?.on("onlineUser", (data) => {
        })


        const handleActivity = () => {
            setIsUserActive(true);
            newSocket.emit('userActive');
        };

        const handleInactivity = () => {
            setIsUserActive(false);
            newSocket.emit('userInActive');
        };

        window.addEventListener('focus', handleActivity);
        window.addEventListener('blur', handleInactivity);
        window.addEventListener('beforeunload', handleInactivity);

        return () => {
            newSocket.close();
            window.removeEventListener('focus', handleActivity);
            window.removeEventListener('blur', handleInactivity);
            window.removeEventListener('beforeunload', handleInactivity);
        };
    }, []);

    return (
        <SocketContext.Provider value={{ socket, isUserActive }}>
            {children}
        </SocketContext.Provider>
    );
};
