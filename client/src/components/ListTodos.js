import React, { Fragment, useEffect, useState } from "react";

function ListTodos() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });
    setTodos(todos.filter((todo) => todo.todo_id !== id))
  };

  const getTodos = async () => {
    const response = await fetch("http://localhost:5000/todos");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>{" "}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default ListTodos;
