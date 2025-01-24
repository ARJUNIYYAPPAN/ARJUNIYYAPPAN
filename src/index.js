import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Dashboard from './Dashboard';
// import InDe from './InDe';
// import { BrowserRouter } from 'react-router-dom';
// import Valid from './Valid';
// import SimpleSlider from './Common/SimpleSlider';
// import Login from './Login';
import { Provider } from 'react-redux';
import store from './Redux/store'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
