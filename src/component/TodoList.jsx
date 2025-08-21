import React, { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";

const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all");

  //filter todos based on serch input

  const filteredTodos = state.todos.filter(
    (todo) => {

       const matchesSearch =
      todo.name.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase());

      // Status filter
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "completed" && todo.isComplete) ||
        (statusFilter === "pending" && !todo.isComplete);

      return matchesSearch && matchesStatus;
    })

  return (
    <div style={{ padding: "20px" }}>
      <div className="d-flex">

        <input
          type="text"
          placeholder="Search tasks..."
          onChange={(e) => setSearch(e.target.value)}
          className="form-control mb-3"
        />
        {/* Dropdown Filter */}
        <select
          className="form-select mb-3"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>

        
      </div>









      <h2>All Tasks</h2>

      {filteredTodos.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <div className="row">
          {filteredTodos.map((todo) => (
            <div key={todo.id} className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{todo.name}</strong></h5>
                  <p className="card-text">{todo.description}</p>
                  <span style={{ marginLeft: "10px" }}>
                    {todo.isComplete ? "Complete✅" : "Pending❌"}
                  </span>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                    }
                    className="btn btn-warning"
                  >
                    Toggle
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      dispatch({ type: "DELETE_TODO", payload: todo.id })
                    }
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDoList