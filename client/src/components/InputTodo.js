import React, { Fragment, useState } from "react";

function InputTodo() {
  const [description, setDescription] = useState("");

const onSubmitForm = async(e) => {
    e.preventDefault()
    try {
        const body = {description}
      
    } catch (error) {
        console.log(error.message);
    }
}

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <div className="container ">
        <form className="d-flex mt-5">
          <input
            type="text"
            className="form-control mx-5"
            value={description} 
            onChange={e => setDescription(e.target.value)}
          />
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </Fragment>
  );
}

export default InputTodo;
