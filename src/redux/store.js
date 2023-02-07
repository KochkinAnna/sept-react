import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slice";

const rootReducer = combineReducers({
    users: userReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {
    setUpStore
}