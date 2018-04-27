import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1 //changing state immutably
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state, //distribute the old state
                results: state.results.concat({ id: new Date(), value: state.counter })

                // concat() method returns a new array so we are indeed updating immutably there
                //id corresponds to new date, i.e when is the item added
            }
        case actionTypes.DELETE_RESULT:
            // 1st method
            //     const id = 2
            //     const newArray = [...state.results]
            //     newArray.results.splice(id, 1)

            // 2nd most common filter method
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state; //default return current state 
};

export default reducer;