import mongoose, { Schema } from 'mongoose';

const Task = new Schema({
    name: String,
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
// Currently mongoose does not support ES6 syntax for model
const TaskModel = mongoose.model('Task', Task);

export default TaskModel;