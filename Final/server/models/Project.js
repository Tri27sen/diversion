const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  requirements: {
    type: [String],
    required: true
  },
  projectLink: {
    type: String,
    required: false
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  difficultyRating: {
    type: Number,
    enum: [1, 2, 3],
    required: true
  }
});

module.exports = mongoose.model('Project', projectSchema);