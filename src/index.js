import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StockContextProvider } from './Context/StockDataContext';
import { productDetailsUpdator, stockData } from './Reducers/StockReducer';
import { LocalStorageContextProvider } from './Context/LocalStorageDataContext';
import { localStorageData, localStorageDataUpdator } from './Reducers/LocalStorageReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StockContextProvider StockUpdator={productDetailsUpdator} stockData={stockData}>
    <LocalStorageContextProvider localStorageUpdator={localStorageDataUpdator}  localStorageData={localStorageData}>
      <App />
    </LocalStorageContextProvider>
  </StockContextProvider>
);

reportWebVitals();
