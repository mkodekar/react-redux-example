import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {render} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {App} from './component/App.jsx';


const initialState = {
    result: 1,
    lastValue: []
};


const myLogger = (store) =>(next) =>(action) => {
    console.log("This action", action);
    next(action);
}

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

const store = createStore(combineReducers({reducer, humanReducer}), {}, applyMiddleware(myLogger, logger));

store.subscribe(() => {
//    console.log("New state ", store.getState());
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

render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById("app"));