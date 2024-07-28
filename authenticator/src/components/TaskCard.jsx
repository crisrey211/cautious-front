import React from 'react'

const TaskCard = ({ task }) => {
    return (
        <div>
            <h1>{task.title}</h1>
            <div>
                <button>Delete</button>
                <button>Edit</button>
            </div>
            <p>{task.description}</p>

            {/* <p>{task.date.toLocaleString()}</p> */}
            <p>{new Date(task.date).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskCard
