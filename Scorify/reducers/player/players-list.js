import { createSlice } from '@reduxjs/toolkit';

const initialState = [];


export const playersListSlice = createSlice({
    name: 'playersList',
    initialState,
    reducers: {
        add: (state, action) => {
            console.debug(`PlayersListAddReducer: \n ${JSON.stringify(state)}, \n ${JSON.stringify(action)}`);

            const newPlayer = action.payload;
            const newState = state.slice();
            newState.push(newPlayer);
            return newState;
        },
        remove: (state, action) => {
            console.debug(`PlayersListRemoveReducer: \n ${JSON.stringify(state)}, \n ${JSON.stringify(action)}`);
            return state.filter(p => p.id !== action.payload.id);
        }
    }
});

export const { add, remove } = playersListSlice.actions;
export default playersListSlice.reducer;