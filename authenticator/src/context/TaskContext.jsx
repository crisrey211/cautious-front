import { createContext, useContext, useState } from 'react'

const TaskContext = createContext()

export const useTask = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new Error('useTask mut be usedd within an TaskProvider')
    }
    return context
}

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    return <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
}
