import React from 'react'
import { useForm } from 'react-hook-form'
import { useTask } from '../context/TasksContext'

const TaskFormPage = () => {
    const { register, handleSubmit } = useForm()
    const { createTask } = useTask()

    const onSubmit = handleSubmit((data) => {
        createTask(data)
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
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
            </form>
        </div>
    )
}

export default TaskFormPage
