import React from 'react'
import { useForm } from 'react-hook-form'
import { useTask } from '../context/TaskContext'

const TaskFormPage = () => {
    const { register, handleSubmit } = useForm()
    const { tasks } = useTask()
    console.log("Array  Task =>", tasks);

    const onSubmit = handleSubmit((data) => {
        console.log(data)
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
                <button>Save</button>
            </form>
        </div>
    )
}

export default TaskFormPage
