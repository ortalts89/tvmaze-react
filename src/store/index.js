//import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux'
import { showsReducer } from './shows'
import { showReducer } from './show'

const rootReducer = combineReducers({
    showReducer,
    showsReducer
});

//export const store = configureStore({reducer: rootReducer,});

export const store = createStore(rootReducer);

