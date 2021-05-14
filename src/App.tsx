import React, {useEffect, useMemo} from 'react';
import './App.css';
import {Navigation} from "./global-components/Navigation";
import {SelectedDevelopersContextProvider} from "./contexts/selected-developers-context-provider";
import axios from "axios";
import {IDataModel} from "./models/Models";

export const App = () => {
    const [selectedDevs, setSelectedDevs] = React.useState<any[]>([]);
    const [appState, setAppState] = React.useState<IDataModel[]>([]);


    useEffect(() => {
        setAppState([]);
        console.log(appState);
        const apiUrl = 'https://random-data-api.com/api/users/random_user?size=10';

        const fetchData = async () => {
            const result = await axios.get(apiUrl);

            setAppState(result.data);
        }

        fetchData();

    }, []);
    
  return (
    <div className="App">
        <SelectedDevelopersContextProvider selectedDevs={selectedDevs} setSelectedDevs={setSelectedDevs}>
            <Navigation appState={appState} />
        </SelectedDevelopersContextProvider>
    </div>
  );
}
