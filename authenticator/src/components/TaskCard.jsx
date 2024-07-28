import React from 'react'
import { Button, Card } from 'flowbite-react'

const TaskCard = ({ task }) => {
    return (
        <Card className="max-w-sm">
            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{task.title}</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{task.description}</p>
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {new Date(task.date).toLocaleDateString()}
                </p>
                {/* <p>{task.date.toLocaleString()}</p> */}
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white gap-3">
                <Button size="xs">Delete</Button>
                <Button size="xs">Edit</Button>
            </div>
        </Card>
    )
}

export default TaskCard
