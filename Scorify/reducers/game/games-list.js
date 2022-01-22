import { createSlice } from '@reduxjs/toolkit';

const initialState = []


export const gamesListSlice = createSlice({
    name: 'gamesList',
    initialState,
    reducers: {
        add: (state, action) => {
            console.debug(`GamesListAdd: ${JSON.stringify(state)}, \n ${JSON.stringify(action)}`);

            const game = {...action.payload};
            const newState = state.slice();
            newState.push(game);
            return newState;
        },
        update: (state, action) => {
            console.debug(`GamesListUpdate: ${JSON.stringify(action)}`);
        }
    }
});

export const { add } = gamesListSlice.actions;
export default gamesListSlice.reducer;

