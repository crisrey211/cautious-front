import { createContext, useContext, useState } from 'react'
import { createTaskRequest, getTaskRequest, getTasksRequest, deleteTaskRequest, updateTaskRequest } from '../api/tasks'

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
    }

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TaskContext.Provider value={{ createTask, getAllTasks, tasks, deleteTask, getTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    )
}
