import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  projectName: { type: String, required: true },
  completed: { type: Boolean, default: false },
  
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
