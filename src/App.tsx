import React, {useEffect} from 'react';
import './App.css';
import {Navigation} from "./global-components/Navigation";
import {SelectedDevelopersContextProvider} from "./contexts/selected-developers-context-provider";

export const App = () => {
    const [selectedDevs, setSelectedDevs] = React.useState<any[]>([]);
    
  return (
    <div className="App">
        <SelectedDevelopersContextProvider selectedDevs={selectedDevs} setSelectedDevs={setSelectedDevs}>
            <Navigation />
        </SelectedDevelopersContextProvider>
    </div>
  );
}
