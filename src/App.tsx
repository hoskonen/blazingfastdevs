import React, {useEffect} from 'react';
import './App.css';
import {Navigation} from "./global-components/Navigation";
import axios from 'axios';

export const App = () => {
  return (
    <div className="App">
        <Navigation />
    </div>
  );
}
