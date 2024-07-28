import React, { useEffect } from 'react'
import { useTask } from '../context/TasksContext'
import TaskCard from '@components/TaskCard'

const TaskPage = () => {
    const { getAllTasks, tasks } = useTask()
    useEffect(() => {
        getAllTasks()
    }, [])
    if (tasks.length == 0) return <h1>No tasks</h1>
    return (
        <div className="grid grid-cols-3 gap-2">
            <h1>TaskPage</h1>
            {tasks.map((item) => (
                <TaskCard task={item} key={item._id} />
            ))}
        </div>
    )
}

export default TaskPage
