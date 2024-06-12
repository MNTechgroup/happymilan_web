// context/ChatSettingsContext.js
import { createContext, useState, useEffect, useContext } from 'react';

// Create context
const ChatSettingsContext = createContext();

// Provider component
export const ChatSettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        theme: 'light',
        isMinimized: false,
    });

    // Load settings from localStorage
    useEffect(() => {
        const savedSettings = localStorage.getItem('chatSettings');
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }
    }, []);

    // Save settings to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('chatSettings', JSON.stringify(settings));
    }, [settings]);

    return (
        <ChatSettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </ChatSettingsContext.Provider>
    );
};

// Custom hook for easier usage
export const useChatSettings = () => useContext(ChatSettingsContext);
