import React from 'react';
import AddTodoContainer from './containers/AddTodoContainer';
// import AddTodo from './components/AddTodo';
import TodoListContainer from './containers/TodoListContainer';
// import TodoList from './components/TodoList';
import VisibilityFiltersContainer from './containers/VisibilityFiltersContainer';
// import VisibilityFilters from './components/VisibilityFilters';
import './styles.css';

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodoContainer />
      <TodoListContainer />
      <VisibilityFiltersContainer />
    </div>
  );
}