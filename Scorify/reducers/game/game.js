/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const gameReducer = (state = {}, action) => {
    console.debug(`Game Reducer: \n State: ${JSON.stringify(state)} \n Action: ${JSON.stringify(action)}`);

    if( action.type === 'game/created') {
        return {...payload};
    } else if(action.type === 'game/round-added') {

        const rounds = state.rounds;
        rounds.push(action.payload);

        const newState = {
            ...state,
            rounds: rounds
        }

        return newState;
    } else {
        return state;
    }
}





