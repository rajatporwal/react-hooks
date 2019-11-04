
const initialState = {
    counter: 0
}

function rootReducer( state = initialState.counter, action) {

    switch(action.type) {
        case 'INCREMENT' :
            return { counter: state.counter + action.payload}
        case 'DECREMENT' :
            return { counter: state.counter - 1}
        default :
            return { counter: state}
    }
}

export default rootReducer;