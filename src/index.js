import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { content } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App content={content.layout1} flipped={false} />

    <App content={content.layout2} flipped={true} />

    <App content={content.layout1} flipped={false} textPosition={'top'} />

    <App content={content.layout1} flipped={true} textPosition={'bottom'} backgroundColor={true} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
