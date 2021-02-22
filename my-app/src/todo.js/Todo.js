import { useContext, useState } from 'react'
import { store } from './Provider'
import TodoList from './TodoList'

export default function Todo() {
  const globalState = useContext(store)
  const [text, setText] = useState('')
  const todos = globalState.state.todos
  const count = globalState.state.count
  const activeTodos = globalState.state.activeTodos
  const completeTodos = globalState.state.completeTodos
  const { dispatch } = globalState

  function handleSubmit(e) {
    e.preventDefault()
    const action = { type: "ADD_TODO", payload: text }
    const count = {type:'INCREMENT'}
    dispatch(action)
    dispatch(count)
    setText('')
  }
  return (
    <div>
      <header className='header'>todos</header>
      <div className="formBox">
      <form onSubmit={handleSubmit} action=''>
        <input
          value={text}
          type='text' className='input' onChange={(e) => setText(e.target.value)} placeholder="To do's"
        />
      </form>
        <TodoList todos={todos} />
      <div className='todo-container'>
        <span className='count'> {count} items left</span>
        <span className='all'onClick={() => dispatch({type:"ALL"})}>All</span>
        <span className='active'onClick={() => dispatch({type:"ACTIVE"})}>Active</span>
        <span className='completed' onClick={() => dispatch({type:"COMPLETED"})}>Completed</span>
        <span className='hidden'>Clear Completed</span>
      </div>
      </div>
    </div>
  )
}





