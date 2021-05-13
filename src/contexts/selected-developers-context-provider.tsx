import * as React from 'react';
import {Dispatch, ReactNode, SetStateAction} from "react";
import { SelectedDevelopersContext } from '../contexts/selected-developers-context';

interface Props {
    selectedDevs: any[];
    setSelectedDevs: Dispatch<SetStateAction<any[]>>;
    children: ReactNode;
}

export const SelectedDevelopersContextProvider = (props: Props) => {
    return <SelectedDevelopersContext.Provider value={[props.selectedDevs, props.setSelectedDevs]}>{props.children}</SelectedDevelopersContext.Provider>;
};