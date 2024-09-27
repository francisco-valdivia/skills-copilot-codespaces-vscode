// creaet web server
// 1. require express
// 2. require path
// 3. create an express server
// 4. create a route that responds to GET requests to /comments
// 5. read the comments.json file
// 6. send the comments as the response
// 7. start the server

// 1. require express
const express = require('express');

// 2. require path
const path = require('path');

// 3. create an express server
const app = express();

// 4. create a route that responds to GET requests to /comments
// 5. read the comments.json file
// 6. send the comments as the response
app.get('/comments', (req, res) => {
    res.sendFile(path.join(__dirname, 'comments.json'));
});

// 7. start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// go to http://localhost:3000/comments in your browser to see the comments data
