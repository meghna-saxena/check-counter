//Since we're executing this file with node, and not connecting it with react app; it needs node imports statement
const redux = require('redux');
const createStore = redux.createStore;

//initializing state
const initialState = { counter: 0 };


// Reducer
const rootReducer = (state = initialState, action) => { //set default state
    return state; //simplest reducer returning the old state
}


// Store
const store = createStore(rootReducer);
console.log(store.getState()); //its a func that pulls out the state from the store


// Dispatching Action




// Subscription