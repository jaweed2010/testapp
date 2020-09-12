import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function isNullOrEmpty(input) {
   // Returns true if the input is either undefined, null, or empty, false otherwise
    return (input === undefined || input === null || input === '');
}
// Export to make the function available to other packages
module.exports = isNullOrEmpty;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
