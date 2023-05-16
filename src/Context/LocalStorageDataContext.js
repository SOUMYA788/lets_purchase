import { createContext, useContext, useReducer } from "react";

const localStorageContext = createContext();

export const LocalStorageContextProvider = ({ children, localStorageData, localStorageUpdator }) => {
    return (
        <localStorageContext.Provider value={useReducer(localStorageUpdator, localStorageData)}>
            {children}
        </localStorageContext.Provider>
    )
}

export const useCurrentLocalStorageState = () => useContext(localStorageContext);