import { useContext, useState } from "react"
import { store } from "./Provider"
export default function TodoList(props) {
  const globalState = useContext(store)
  const { dispatch } = globalState
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
           <li
            key={todo.id}
            id="todoList"
            className={todo.isDone == false ? "" : "done"}>
           <div id='line-through' >
            <input
              onChange={() =>
                dispatch({ type: "CHECK_TODO", payload: todo.id })
              }
              checked={todo.isDone}
              className="is-done"
              type="radio"
            />
            {" "}
            {todo.description}
            </div>
            <div className='Btn'>
            <button className="delete"
              onClick={() => dispatch({ type: "DEL_TODO", payload: todo.id })}
            >
              &#10060;
            </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}