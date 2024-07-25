import { createContext, useContext, useState } from 'react'
import { createTaskRequest, getTasksRequest } from '../api/tasks'

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

    const getAllTasks = async () => {
        try {
            const res = await getTasksRequest()
            console.log("Get tareas=>", res);
            setTasks(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const createTask = async (task) => {
        const res = await createTaskRequest(task)
        console.log('task created =>', res);
    }

    return <TaskContext.Provider value={{ createTask, getAllTasks, tasks }}>{children}</TaskContext.Provider>
}
