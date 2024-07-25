import React, { useEffect } from 'react'
import { useTask } from '../context/TasksContext'

const TaskPage = () => {
    const { getAllTasks, tasks } = useTask()
    useEffect(() => {
        getAllTasks()
    }, [])
    if (tasks.length == 0) return <h1>No tasks</h1>
    return (
        <div>
            <h1>TaskPage</h1>
            {tasks.map((item) => (
                <div key={item._id}>
                    <h2>{item.title}</h2>
                    <span>{item.description}</span>
                </div>
            ))}
        </div>
    )
}

export default TaskPage
