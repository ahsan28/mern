import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    name: String,
    creator : {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    isDone: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

export default Task;