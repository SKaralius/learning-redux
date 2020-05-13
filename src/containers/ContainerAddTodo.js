import { connect } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";
import AddTodo from "../components/AddTodo";

const mapStateToProps = (state) => {
  return { value: state.todos };
};

export default connect(mapStateToProps, { addTodo })(AddTodo);

//If you call connect without providing any arguments, your component will:

// not re-render when the store changes
// receive props.dispatch that you may use to manually dispatch action
