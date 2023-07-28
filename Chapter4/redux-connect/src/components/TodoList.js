import React from "react";
import TodoContainer from "../containers/TodoContainer";
// import Todo from "./Todo";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <TodoContainer key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

export default TodoList;
