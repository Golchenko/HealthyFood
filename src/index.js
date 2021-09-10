import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import ShopProvider from './context/ShopContext'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <ShopProvider>
        <App />
      </ShopProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
