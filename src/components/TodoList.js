import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { connect } from "react-redux";

const TodoList = props => {
  console.log(props);
  return (
    <ul>
      {props.todos.length < 1 ? (
        <li>{`No todo's in ${props.filter}`}</li>
      ) : (
        props.todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => props.toggleTodo(todo.id)}
          />
        ))
      )}
    </ul>
  );
};

const mapStateToProps = state => {
  return { filter: state.visibilityFilter };
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(TodoList);
