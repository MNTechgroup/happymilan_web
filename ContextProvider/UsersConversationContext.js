import { getCookie } from 'cookies-next';
import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Create the context
const UserContext = createContext();

// Create the context provider component
const UsersConversationProvider = ({ children }) => {


    // Define state to store user data
    const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     const token = getCookie("authtoken")
    //     const socket = io.connect('https://happymilan.tech', {
    //         path: '/api/socket.io',
    //         query: { token: token }
    //     });

    //     socket.on('connect', () => {
    //         console.log('Connected to socket from context side');
    //     });
    //     const currentUserID = getCookie("authtoken");
    //     socket.emit("getLastConversation", { from: currentUserID, to: userData?.id });
    //     socket.emit("getLastConversation", { to: currentUserID, from: userData?.id });
    // }, [userData])

    // Define functions to update user data
    const updateUser = (newData) => {
        console.log("🚀 ~ updateUser ~ newData:", newData)
        setUserData(newData);

    };

    // Value object to provide to consuming components
    const value = {
        userData,
        updateUser,
    };

    // Return the context provider with its value
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Export the context and its provider
export { UserContext, UsersConversationProvider };
