// Import required modules
import express from 'express';
import Project from '../models/project.mjs';
import data from '../config/data.json' assert { type: 'json' };

// Helper function to check if all requirements are met
function areAllRequirementsMet(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      return false;
    }
  }
  return true;
}

// Create an instance of the Express router
const router = express.Router();

// Define the route using async/await syntax
router.get('/projects', async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || '';
    let sort = req.query.sort || 'difficultyRating';
    let require = req.query.requirements || 'None';

    // Define available options for requirements
    const options = [
      'HTML',
      'CSS',
      'JavaScript',
      'ReactJS',
      'Node.js',
      'Express',
      'MongoDB',
      'Payment Gateway Integration',
      'Python',
      'Machine Learning',
      'Natural Language Processing',
      'Socket.io',
      'Automation Library',
      'Redux',
      'API Integration',
      'Weather API',
      'Notification API',
      'Geolocation API',
    ];

    // Convert 'None' to an array with an empty string
    require = require === 'None' ? [''] : require.split(',');
    sort = req.query.sort ? req.query.sort.split(',') : [sort];

    // Create an object for sorting
    const sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1];
    } else {
      sortBy[sort[0]] = 'asc';
    }

    // Fetch projects from the database, applying search and sorting
    const projects = await Project.find({
      projectName: { $regex: new RegExp(search, 'i') },
    }).sort(sortBy);

    // Filter projects based on requirements
    const filteredProjects = projects.filter(project =>
      areAllRequirementsMet(require, project.requirements)
    );

    // Slice projects based on pagination
    const updatedProjects = filteredProjects.slice(page * limit, (page + 1) * limit);

    // Prepare the response object
    const response = {
      error: false,
      total: filteredProjects.length,
      page: page + 1,
      limit,
      total_pages: Math.ceil(filteredProjects.length / limit),
      requirements: require,
      projects: updatedProjects,
    };

    // Send the response as JSON
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    // Handle errors and send an appropriate response
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
});

// Comment these lines if database is already populated, Uncomment if 'data.json' is updated

const insertProjects = async () => {
  try {
    await Project.deleteMany({});
    const docs = await Project.insertMany(data);
    return Promise.resolve(docs);
  } catch (err) {
    return Promise.reject(err);
  }
};

insertProjects()
  .then((docs) => {
    console.log("document loaded ----");
  })
  .catch((err) => {
    console.log(err);
  });

// Comment upto this line [Select these lines and press 'Ctrl + /' to comment]

// Export the router as the default export of this module
export default router;