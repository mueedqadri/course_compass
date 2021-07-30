import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App.jsx'
import {  BrowserRouter as Router} from "react-router-dom";
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <Router>
    <SnackbarProvider>
      <App/>
    </SnackbarProvider>
  </Router>
  ,
  document.getElementById('root')
);
reportWebVitals();
