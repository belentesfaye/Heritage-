// src/index.js or src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {App} from './App'; // Path to your main App component
import FirebaseContextProvider from  './context/Firebase';
import AuthenticationContextProvider from './context/AuthenticationContext';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <AuthenticationContextProvider>
        <App />
      </AuthenticationContextProvider>
    </FirebaseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
