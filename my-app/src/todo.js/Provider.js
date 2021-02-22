import { createContext, useReducer } from "react"
const initialState = { todos: [], count: 0 ,activeTodos:[],completeTodos:[]}
export const store = createContext(initialState)
const { Provider } = store
const id = () => Math.random().toString() + "-" + Math.random().toString()

function TodoReducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    case "ADD_TODO":
      console.log(state,action)
      return {
        ...state,
        todos: [...state.todos,{ id: id(), description: action.payload,isDone: false }],
      }
    case 'INCREMENT':
        return {...state,count:state.count+1}
    case "CHECK_TODO":
      const newTodos = state.todos.map(item => {
        if(item.id == action.payload) {
          return {...item,isDone:true}
        } else {
          return item
        }
      })
       return { ...state, todos: newTodos}
    case 'DEL_TODO':
          return {...state, todos: state.todos.filter(item=>item.id!==action.payload),count:state.count -1 };
    case 'ALL':
          return {...state,todos:state.todos }
    case 'COMPLETED':
          return { ...state,completeTodos:[ state.todos.filter(item=>item.isDone==true)]}
    case 'ACTIVE':
            return { ...state,activeTodos: state.todos.filter(item=>item.isDone==false)}
    default:
           throw new Error()
    }
  }
  const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState)
    return <Provider value={{ state, dispatch }}>{children}</Provider>
  }
  export default StateProvider

