import {createContext, useReducer} from "react";

import {initional, petsOwnersReducerFunction} from "../reducers";



const StateContext = createContext(null);

const StateProvider = ({children}) => {
    const reducers = {
        petsOwnersReducer: useReducer(petsOwnersReducerFunction, null, initional)
    }
    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {StateProvider, StateContext};