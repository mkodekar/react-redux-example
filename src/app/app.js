import {createStore} from 'redux';

const initialState = {
    result: 1,
    lastValue: []
};

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);

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