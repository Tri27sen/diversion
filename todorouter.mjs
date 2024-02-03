import express, { response } from 'express';
const router = express.Router();
import Todo from './models/todo.mjs';
import User from './models/user.mjs';
import Project from './models/project.mjs'
const app = express()

import cors from 'cors'


import dbConnect from './db/dbconnect.mjs';
// Connect to MongoDB (you need to have MongoDB running)
// Set up middleware
dbConnect();
const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("todoRouter called -------")


/*router.post ("/updateTodoState", async (req, res)=>{
  try {
    const projectName = req.body.projectName;
    const username = req.body.username
    
   
    
    if(!username){
      return res.status(404).json({ error: true, message: "Username not found" });
    }  
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }

    // Extract the unique ID of the user
    const userId = user._id;
    // Check if the project with the given name exists
    const project = await Project.findOne({ projectName });
    if (!project) {
      return res.status(404).json({ error: true, message: "Project not found" });
    }
    
    // Check if the project is already in the user's todo list
    const existingTodo = await Todo.findOne({ userId, projectName });
    if ( !existingTodo) {
      // If the project is marked as complete and doesn't exist in todo list, add it
      const newtodo = new Todo({
        userId,
        projectName,
      });
      
      user.todoProjects.push({ project: project._id, projectName });
      await user.save();
      await newtodo.save();

      res.status(200).json({ error: false, message: "Project added to todo list successfully" });
    } /*else if ( existingTodo) {
      // If the project is marked as incomplete and exists in todo list, remove it
      console.log("checked undo .....")
      console.log(completed)
      await Todo.deleteOne({ userId, projectName });
      user.todoProjects = user.todoProjects.filter((project) => project.projectName !== projectName);
      await user.save();

      res.status(200).json({ error: false, message: "Project removed from todo list successfully" });}
    else {
      // Project is either already in todo list or marked as complete, handle accordingly
      res.status(400).json({ error: true, message: "Invalid request" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

*/
router.post("/updateTodoState", async (req, res) => {
  try {
    const projectName = req.body.projectName;
    const username = req.body.username;

    if (!username) {
      return res.status(404).json({ error: true, message: "Username not found" });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }

    // Extract the unique ID of the user
    const userId = user._id;

    // Check if the project with the given name exists
    const project = await Project.findOne({ projectName });

    if (!project) {
      return res.status(404).json({ error: true, message: "Project not found" });
    }

    // Check if the project is already in the user's todo list
    const existingTodo = await Todo.findOne({ userId, projectName });

    if (!existingTodo) {
      // If the project is not already in the todo list, add it
      const newTodo = new Todo({
        userId,
        projectName,
      });

      user.todoProjects.push({ project: project._id, projectName });
      await user.save();
      await newTodo.save();
      console.log(projectName)
      res.status(200).json({ error: false, message: "Project added to todo list successfully" });
    } else {
      // Project is already in the todo list, handle accordingly
      res.status(400).json({ error: true, message: "Project already in todo list" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

// Add this route in your backend
router.get("/getTodoList", async (req, res) => {
  try {
    console.log(req.query)
    const username = req.query.username;
    console.log(username)
    if (!username) {
      return res.status(400).json({ error: true, message: "Username not provided" });
    }
    console.log(" gettodolist triggered -------")
    const user = await User.findOne({ username });
    console.log(user)
    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }
    const userId = user._id;
    const todoList = await Todo.find({ userId })
    
    const formattedTodoList = todoList.map(todo => ({
      name: todo.userId ,
      projectName : todo.projectName , 
      completed: true, // Use true for completed projects
    }));
    console.log("the todo list is -----")
    console.log(todoList)
    console.log(formattedTodoList)
    res.status(200).json({ error: false, todoList: formattedTodoList });
  } catch (error) {
    console.error('Error fetching todo list:', error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});


router.delete("/deltodo", async (req, res) => {
  try {
    const projectName = req.body.projectName;
    const username = req.body.username;

    if (!username) {
      return res.status(404).json({ error: true, message: "Username not found" });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: true, message: "User not found" });
    }

    // Extract the unique ID of the user
    const userId = user._id;

    // Check if the project with the given name exists
    const project = await Project.findOne({ projectName });

    if (!project) {
      return res.status(404).json({ error: true, message: "Project not found" });
    }

    // Check if the project is in the user's todo list
    const existingTodo = await Todo.findOneAndDelete({ userId, projectName });

    if (!existingTodo) {
      return res.status(400).json({ error: true, message: "Project not in todo list" });
    }

    // Remove the project from the user's todoProjects
    user.todoProjects = user.todoProjects.filter(
      (todoProject) => todoProject.project.toString() !== project._id.toString()
    );

    // Save the user with the updated todoProjects
    await user.save();

    res.status(200).json({ error: false, message: "Project removed from todo list successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});


export default router;