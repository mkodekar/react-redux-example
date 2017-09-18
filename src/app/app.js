import {createStore, combineReducers} from 'redux';

const initialState = {
    result: 1,
    lastValue: []
};


const humanReducer = (state = {
    name: "Rehan",
    age: "26"
}, action) => {
    switch(action.type) {
        case 'ADD_USER':
            state = {
                ...state,
                name: action.payload_name,
                age: action.payload_age,
            };
            break;
    }
    return state;
};

const reducer = (state = {
    result: 1,
    lastValue: []
}, action) => {
    switch(action.type) {
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValue: [...state.lastValue, action.payload]
            };
            break;
        case 'SUBTRACT':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValue: [...state.lastValue, action.payload]
            };
            break;
    }
    return state;
};

const store = createStore(combineReducers({reducer, humanReducer}));

store.subscribe(() => {
    console.log("New state ", store.getState());
});

store.dispatch({
    type: 'ADD',
    payload: 10
});

store.dispatch({
    type: 'ADD',
    payload: 100
})

store.dispatch({
    type: 'SUBTRACT',
    payload: 10
})

store.dispatch({
    type: 'ADD_USER',
    payload_name: "Pritesh",
    payload_age: 23  
})