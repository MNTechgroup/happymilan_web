// utils/localStorage.js

export const getLocalStorageData = (key) => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(key);
      if (data) {
        try {
          return JSON.parse(data);
        } catch (error) {
          console.error("Error parsing JSON from local storage", error);
          return null;
        }
      }
      return null;
    }
    return null;
  };
  
  export const setLocalStorageData = (key, value) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("Error setting data in local storage", error);
      }
    }
  };
  
  export const updateLocalStorageData = (key, update) => {
    const data = getLocalStorageData(key);
    if (data) {
      const updatedData = { ...data, ...update };
      setLocalStorageData(key, updatedData);
    }
  };
  
  export const getEmailFromLocalStorage = (key) => {
    const data = getLocalStorageData(key);
    return data?.email || null;
  };
  
  export const updateEmailInLocalStorage = (key, email) => {
    updateLocalStorageData(key, { email });
  };
  
  export const getNameFromLocalStorage = (key) => {
    const data = getLocalStorageData(key);
    return data?.name || null;
  };
  
  export const updateNameInLocalStorage = (key, name) => {
    updateLocalStorageData(key, { name });
  };
  