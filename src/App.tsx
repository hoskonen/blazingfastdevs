import React, {useEffect} from 'react';
import './App.css';
import {Navigation} from "./global-components/Navigation";
import axios from 'axios';

export const App = () => {
    const [selectedDevs, setSelectedDevs] = React.useState<any[]>([]);
    
  return (
    <div className="App">
        <Navigation />
    </div>
  );
}
