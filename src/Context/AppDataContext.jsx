import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

export const AppDataContextProvider = ({ children, appData, appDataUpdator }) => {
    return (
        <AppContext.Provider value={useReducer(appDataUpdator, appData)}>
            {children}
        </AppContext.Provider>
    )
}

export const useCurrentAppState = () => useContext(localStorageContext);