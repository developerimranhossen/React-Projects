import { createContext, useContext, useReducer, useState } from "react";
import {initialTasks, tasksReducer} from '../reducers/tasksReducer'

const TasksContext = createContext()

export default function TasksProvider({children}){
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <TasksContext.Provider value={{tasks, dispatch, searchTerm, setSearchTerm}}>
            {children}
        </TasksContext.Provider>
    )
}
export function useTask() {
    return useContext(TasksContext)
}

export {TasksContext}