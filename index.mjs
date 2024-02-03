















import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import passportLocalMongoose from 'passport-local-mongoose';
import session from 'express-session';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import User from './models/user.mjs'; // You need to have a User model
import projectRoutes from "./routes/projectRoute.mjs";
import todoRouter from './todorouter.mjs'
const app = express();
const port = process.env.PORT || 5500;


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
app.use(session({
  secret: "Rusty is a dog",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
 
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Set up passport

// Routes
app.use("/", projectRoutes);
app.use('/', todoRouter);
app.post("/register", async (req, res) => {
  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      console.log("Username already taken. Choose a different username")
      return res.status(400).json({ error: "Username already taken. Choose a different username." });
    }

    // Ensure that the password is provided and not an empty string
    if (!req.body.password) {
      return res.status(400).json({ error: "Password is required." });
    }
    console.log(req.body.password)
    console.log(req.body.username)
    // If the username is unique and password is provided, create the new user
    const user = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    console.log("new user created ")
    console.log(user)
    console.log("registered .....")
    return res.status(200).json({ message: 'Registration successful', redirect:'/home.html?username=' + user.username });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login',   async( req,res , next) =>{ 
  console.log(req.body.username )
  console.log(req.body.password)
   try {
  // check if the user exists
  const user = await User.findOne({ username: req.body.username });
 
  if (user) {
    console.log(user);
    const result = await bcrypt.compare(req.body.password, user.password);
   console.log("user password ")
    console.log(user.password)
    console.log(result)
    if (result) {
      console.log("logged in ")//res.render("index.html");
      console.log(user.username)
      console.log(res.redirect)
      return res.status(200).json({ message: 'Login successful', redirect: '/todolog.html?username=' + user.username });
    } else {
      res.status(400).json({ error: "password doesn't match" });
    }
  } else {
   
    res.status(400).json({ message: 'User not found',  });
  }
} catch (error) {
  res.status(400).json({ error });
}
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
