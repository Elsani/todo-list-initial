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

  // const [todos, setTodos] = useState(initialTodos);

  function deleteHandler(id) {
    if (confirm("Are you sure you want to delete the to-do?")) {
      store.setTodos(store.todos.filter((todo) => todo.id !== id));
    }
  }
  function toggleIsDoneHandler(id) {
    console.log("Toggled");
    store.setTodos(
      store.todos.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
          return todo;
        } else {
          return todo;
        }
      })
    );
  }
  return (
    <>
      <div className="todos">
        {store.todos.map((todo) => (
          <Todo
            deleteTodo={(id) => deleteHandler(id)}
            toggleIsDone={(id) => toggleIsDoneHandler(id)}
            todo={todo}
            key={todo.id}
          />
        ))}
      </div>
    </>
  );
}

export default TodosList;
