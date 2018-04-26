//Since we're executing this file with node, and not connecting it with react app; it needs node imports statement
const redux = require('redux');
const createStore = redux.createStore;

//initializing state
const initialState = {
    counter: 0
}


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
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};


// Store
const store = createStore(rootReducer);
console.log(store.getState()); //its a func that pulls out the state from the store
// this is the first console log when store is initalized returning initial state


// Subscription
//subscribe takes an argument, a funct which will be executed when the state is updated, 
//so whenever action is dispatched to reach reducer and mutates the store.

// Subscription should go before the dispatching, otherwise you'll miss that dispatch as the subscription is set up too late.
// So first write subscription, then dispatch


store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})


// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());


