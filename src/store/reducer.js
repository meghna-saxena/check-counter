const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1 //changing state immutably
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                counter: state.counter - action.value
            }
    }
    return state; //default return current state 
};

export default reducer;