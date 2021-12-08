import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(  
  //  we are rendering whatever present inside the app componenet
  <React.StrictMode>  
    {/* react folllow strict rule and regulation writing the code */} 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//react is basically rendering the entire app componenet and presenting the final result 

