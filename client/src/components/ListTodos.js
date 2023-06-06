import React, { Fragment, useEffect, useState } from "react";

function ListTodos() {
  const [todos, setTodos] = useState([]);

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
              <tr>
                <td>{todo.description}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default ListTodos;
