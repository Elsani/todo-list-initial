import { useState } from "react";
import Todo from "./Todo";
import { useContext } from "react";
import { TodosContext } from "../TodosContext.js";

// const initialTodos = [
//   {
//     id: 0,
//     title: "Do Groceries",
//     description: "Buy apples, rice, juice and toilet paper.",
//     isDone: true
//   },
//   {
//     id: 1,
//     title: "Study React",
//     description: "Understand context & reducers.",
//     isDone: false
//   },
//   {
//     id: 2,
//     title: "Learn Redux",
//     description: "Learn state management with Redux",
//     isDone: false
//   }
// ];

function TodosList() {
  const store = useContext(TodosContext);

  return (
    <>
      <div className="todos">
        {store.todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
}

export default TodosList;
