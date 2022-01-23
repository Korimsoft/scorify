import { combineReducers } from '@reduxjs/toolkit';
import gamesListReducer from './game/games-list';
import playersListReducer from './player/players-list';


export const rootReducer = combineReducers(
    {
        playersList: playersListReducer,
        gamesList: gamesListReducer
    }
);