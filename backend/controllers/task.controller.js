import TaskModel from '../models/task.model.js';


const read = async (req, res) => {
    try {
        const task = await TaskModel.findOne({_id: req.params.id})

        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const readAll = async (req, res) => {
    try {
        const tasks = await TaskModel.find()

        res.status(200).json(tasks)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const update = async (req, res) => {
    try {
        const task = await TaskModel.findOneAndUpdate(
            {_id:req.body._id},
            { $set: req.body }
        )

        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const add = async (req, res) => {
console.log("🚀 ~ file: task.controller.js ~ line 38 ~ add ~ req", req)
    const newTask = new TaskModel({...req.body, creator: "614cda3df2b8bf419ed0c08b"})
    try {
        await newTask.save()
        res.status(201).json(newTask)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

const remove = async (req, res) => {
    try {
        TaskModel.findOneAndUpdate(
            {_id:req.params.id},
            { $set: req.body },
            (err,task)=> {
                if (err) res.status(500).json({message: "Task is removed"})
                else res.status(200).json(task)
            }
        )
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

const functions = {
    add,
    update,
    read,
    readAll,
    remove
}

export default functions;