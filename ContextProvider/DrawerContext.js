import React, { createContext, useContext, useState } from 'react';

// Create a context
const DrawerContext = createContext();

// Create a provider component
export const DrawerProvider = ({ children }) => {
  const [drawerState, setDrawerState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => () => {
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  return (
    <DrawerContext.Provider value={{ drawerState, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

// Create a custom hook to use the DrawerContext
export const useDrawer = () => {
  return useContext(DrawerContext);
};
