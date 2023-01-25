import { createStore } from 'redux';

let initialState = { value: 0 };

const reducer = (state = initialState, action) => {
  console.log('reducer called');
  if (action.type == 'INC') {
    return { value: state.value + 1 }
  }
  else if ((action.type == 'DEC')) {
    return { value: state.value - 1 }
  }
  else {
    return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('current state', store.getState().value);
});

store.dispatch({
  type: 'INC'
})

store.dispatch({
  type: 'INC'
})

export default function App() {
  return (
    <h1>{initialState.value} {store.getState().value}</h1>
  )
}
