import { createContext, useContext, useReducer, useState } from 'react'
import StateProvider ,{store} from './Provider'
import Todo from './Todo'

export default function TodoApp() {
    return <StateProvider>
        <Todo />
    </StateProvider>
}
