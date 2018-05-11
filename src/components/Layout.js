import React from 'react';
import Navbar from './Navbar';
import './../sass/main.scss';

export default props => (
  <div className="wrapper">
    <Navbar />
    {props.children}
  </div>
);
