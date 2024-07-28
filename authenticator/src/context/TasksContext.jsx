import { createContext, useContext, useState } from 'react'
import { createTaskRequest, getTasksRequest, deleteTaskRequest } from '../api/tasks'

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
            setTasks(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const createTask = async (task) => {
        const res = await createTaskRequest(task)
    }

    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id)
            if (res.status == 204) setTasks(tasks.filter((item) => item._id != id))
        } catch (error) {
            console.log(error)
        }

        console.log('Task deleted =>', res)
    }

    return (
        <TaskContext.Provider value={{ createTask, getAllTasks, tasks, deleteTask }}>{children}</TaskContext.Provider>
    )
}
