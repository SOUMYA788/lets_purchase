const { createContext, useReducer, useContext } = require("react");

export const stockContext = createContext();

export const StockContextProvider = ({ children, stockData, StockUpdator }) => {
    return (
        <stockContext.Provider value={useReducer(StockUpdator, stockData)}>
            {children}
        </stockContext.Provider>
    )
}

export const useCurrentStockState = () => useContext(stockContext)