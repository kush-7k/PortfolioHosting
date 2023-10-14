const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('home');
});

// About Me Page
router.get('/about', (req, res) => {
  res.render('about');
});

// Projects Page
router.get('/project', (req, res) => {
  res.render('project');
});

// Contact Me Page
router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
