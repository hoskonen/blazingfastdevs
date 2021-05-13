import * as React from 'react';
import {Dispatch, SetStateAction} from "react";

export const SelectedDevelopersContext = React.createContext<[any[], Dispatch<SetStateAction<any[]>>]>([[], () => {}]);
