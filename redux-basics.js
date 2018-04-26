//Since we're executing this file with node, and not connecting it with react app; it needs node imports statement
const redux = require('redux');
const createStore = redux.createStore;

//initializing state
const initialState = { counter: 0 };


// Reducer
const rootReducer = (state = initialState, action) => { //set default state
    if (action.type === 'INC_COUNTER') {
        // state.counter++; this is not the right way, since we're mutating the original state
        // return state; 

        // instead return a new js object with updated state
        return {
            // copy the old state with spread opearator
            ...state,
            // then overwrite the one property you want to adjust
            //and if that's also a js object, first copy that too so to avoid mutating any data
            counter: state.counter + 1
        };
        if (action.type === 'ADD_COUNTER') {
            return {
                ...state,
                counter: state.counter + action.value
            };
        }
        return state;   
    }
}


    // Store
    const store = createStore(rootReducer);
    console.log(store.getState()); //its a func that pulls out the state from the store
    // this is the first console log when store is initalized returning initial state

    // Dispatching Action
    store.dispatch({ type: 'INC_COUNTER' });
    store.dispatch({ type: 'ADD_COUNTER', value: 10 });
    console.log(store.getState());


// Subscription