import React from 'react'
import { Button, Card } from 'flowbite-react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdModeEditOutline } from 'react-icons/md'
import { useTask } from '@context/TasksContext'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

const TaskCard = ({ task }) => {
    const { deleteTask } = useTask()

    return (
        <div className="grid gap-4">
            <div className="bg-muted p-4 rounded-lg">
                <div className="inline-flex items-center justify-around">
                    <p className="text-base font-medium">{task.title}</p>
                    <div className="flex gap-2">
                        <Button
                            size="xs"
                            color={'failure'}
                            onClick={() => {
                                deleteTask(task._id)
                            }}
                        >
                            <FaRegTrashAlt />
                        </Button>
                        <Link to={`/tasks/${task._id}`}>
                            <MdModeEditOutline color="#000_70" />
                        </Link>
                    </div>
                    <p className="text-sm text-muted-foreground">{dayjs(task.date).utc().format('DD/MM/YYYY')}</p>
                </div>
                <p className="text-sm text-muted-foreground">{task.description}</p>
            </div>
        </div>
    )
}

export default TaskCard
