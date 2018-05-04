import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state, //distribute the old state
                results: state.results.concat({ id: new Date(), value: action.result })

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

