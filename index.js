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

// Create a state tree
const store = Redux.createStore(counter);

// Define a render function which updates the document with the state.
const render = () => {
  document.body.innerText = store.getState();
};
// Initial call so that a blank page would not be rendered
// before the click.
render();

// Subscribe the state tree, so that a function can be called
// on every state change.
store.subscribe(() => {
  render();
});

// store.dispatch calls an action.
document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});
