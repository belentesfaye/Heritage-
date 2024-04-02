// src/index.js or src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {App} from './App'; // Path to your main App component

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
