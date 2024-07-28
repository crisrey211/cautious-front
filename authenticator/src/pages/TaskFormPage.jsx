import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTask } from '../context/TasksContext'
import { useNavigate, useParams } from 'react-router-dom'

const TaskFormPage = () => {
    const { register, handleSubmit, setValue } = useForm()
    const { createTask, getTask, updateTask } = useTask()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id)
                setValue('title', task.title)
                setValue('description', task.description)
            }
            console.log(params)
        }
        loadTask()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, data)
        } else {
            createTask(data)
        }
        navigate('/tasks')
    })

    return (
        <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form className="flex flex-col" onSubmit={onSubmit}>
                <input
                    className={'w - full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'}
                    type="text"
                    placeholder="Title"
                    autoFocus
                    {...register('title')}
                />
                <textarea
                    className={'w - full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'}
                    rows={3}
                    placeholder="Description"
                    {...register('description')}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
            </form>
        </div>
    )
}

export default TaskFormPage
