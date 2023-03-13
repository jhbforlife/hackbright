// imports
const express = require('express');
const path = require('path');

// instantiate the express application
const app = express();

// allows the app to see the public dir and load files from there
app.use('/static', express.static(path.join(__dirname, 'public')));


// routing
app.get('/', (req, res) => {
  // responds with index.html whenever a GET request is made to the root URL
  let indexPath = path.join(__dirname, '/public/index.html');
  res.sendFile(indexPath);
})


// tells our app to listen for requests on port 4000
app.listen(4000, () => console.log('Server running on port 4000'));
