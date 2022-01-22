import { combineReducers } from '@reduxjs/toolkit';
import playersListReducer from './player/players-list';


export const rootReducer = combineReducers(
    {
        playersList: playersListReducer
    }
);