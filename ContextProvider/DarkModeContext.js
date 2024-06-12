// DarkModeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode)); // Store mode in local storage
  };

  // Effect to set initial mode from local storage on component mount
  useEffect(() => {
    const savedMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedMode !== null) {
      setDarkMode(savedMode);
    }
  }, []);

  // Add or remove 'dark' class from documentElement based on dark mode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Cleanup function to remove event listener
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export let useDarkMode = () => useContext(DarkModeContext);