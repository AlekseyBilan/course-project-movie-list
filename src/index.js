import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import stabData from './stab';

ReactDOM.render(
  <React.StrictMode>
    <App data={stabData}/>
  </React.StrictMode>,
  document.getElementById('root')
);
