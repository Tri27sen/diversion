const router = require("express").Router();
const Project = require("../model/project");
const data = require("../config/data.json");
const User = require("../model/user")

const Todo = require("../model/todo");
console.log("todoRouter called -------")


router.post ("/todo", async (req, res)=>{
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
    if (existingTodo) {
      return res.status(400).json({ error: true, message: "Project already in todo list" });
    }

    // Create a new todo item and save it to the database
    const newtodo = new Todo({
      userId,
      projectName,    ////------ saved using username , userid needs to be send back
    });
    user.todoProjects.push({ project: project._id, projectName });

    // Save the user with the updated todoProjects
    await user.save();
    await newtodo.save();

    res.status(200).json({ error: false, message: "Project added to todo list successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});




// Remove project from todo list
router.delete("/todo", async (req, res) => {
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

module.exports = router;
