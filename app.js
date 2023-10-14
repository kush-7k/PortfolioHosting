const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routers/index');

// Setting up the view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Using the defined routes
app.use('/', indexRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:3000`);
});
