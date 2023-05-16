import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StockContextProvider } from './Context/StockDataContext';
import { productDetailsUpdator, stockData } from './Reducers/StockReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StockContextProvider  StockUpdator={productDetailsUpdator} stockData={stockData}>
    <App />
  </StockContextProvider>
);

reportWebVitals();
