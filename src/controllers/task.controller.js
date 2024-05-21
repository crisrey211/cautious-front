import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        //An ojbect to get all tasks by Id.
        user: req.user.id,
    }).populate('user') //popule to get all data related to User
    res.json(tasks)
}
export const createTask = async (req, res) => {
    const { title, description, date } = req.body

    //just in case, for debuging.
    console.log(req.user)

    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id,
    })
    const savedTask = await newTask.save()
    res.json(savedTask)
}
export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id)
    if (!task) return res.status(404).json({ message: 'Task not found by ID' })
    res.json(task)
}
export const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    if (!task) return res.status(404).json({ message: 'Task not deleted' })
    res.json(task)
}
export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json({ message: 'Task not deleted' })

    //For debugging
    /* res.json(task) */
    res.sendStatus(204)
}
