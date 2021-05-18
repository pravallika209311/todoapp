import React from 'react';
import Header from './Header.js';
import Form from './Form.js';

import  './App.css';
const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
      <div><Header /></div>
      <div><Form /></div>
      </div>
    </div>
  )
}

export default App;
