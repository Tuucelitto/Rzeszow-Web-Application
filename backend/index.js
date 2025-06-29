const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Project = require('./models/Project');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/tugce-portfolio';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err.message));

// Sample projects data (fallback)
const sampleProjects = [
  {
    _id: '1',
    title: 'Rzeszow Web Application',
    description: 'A comprehensive web application developed for final grading, showcasing modern web development practices and user interface design.'
  },
  {
    _id: '2',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Node.js, featuring dynamic content management and elegant design.'
  },
  {
    _id: '3',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with user authentication, product management, and secure payment processing.'
  },
];

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    if (projects.length === 0) {
      // If DB is connected but has no projects, return sample data
      return res.json(sampleProjects);
    }
    res.json(projects);
  } catch (err) {
    // If DB connection or query fails, log it and return sample data as a fallback
    console.error("Database error, returning sample projects as fallback:", err.message);
    res.json(sampleProjects);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
}); 