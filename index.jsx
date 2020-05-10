const React = require('react');
const ReactDOM = require('react-dom');
const {createStore} = require('redux');

// This is a reducer function, which takes an argument of
// state and an action.
// Action has types which return functions.
// As convention the initial state is returned if action type
// is unexpected.
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const Counter = ({ value, onIncrement, onDecrement }) => {
 return <div>
          <h1>{value}</h1>
          <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>+</button>
        </div>;
};

// Create a state tree
const store = createStore(counter);

// Define a render function which updates the document with the state.
const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()} 
    onIncrement={()=>{
      store.dispatch({
        type: "INCREMENT"
      })
    }}
    onDecrement={()=>{
      store.dispatch({
        type: "DECREMENT"
      })
    }}    
    />,
    document.getElementById("root")
  );
};
// Initial call so that a blank page would not be rendered
// before the click.
render();

// Subscribe the state tree, so that a function can be called
// on every state change.
store.subscribe(() => {
  render();
});
