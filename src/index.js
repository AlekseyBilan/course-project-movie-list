import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const data = '123wqfwargw evgr ew4567';

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);
