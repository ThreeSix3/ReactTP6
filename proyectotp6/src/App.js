import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const AddTodo = (event) => {
    event.preventDefault();
    const newTodo = event.target.todo.value;
    setTodos([...todos, { title: newTodo, completed: false }]);
    event.target.reset();
  };

  const ToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <form onSubmit={AddTodo}>
        <input type="text" name="todo" placeholder="Add new todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed} onChange={() => ToggleTodo(index)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;