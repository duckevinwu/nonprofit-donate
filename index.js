const bodyParser = require('body-parser');
const express = require('express');
var routes = require("./routes.js");
const path = require('path');
const cors = require('cors');
const enforce = require('express-sslify');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

/* ---------------------------------------------------------------- */
/* ------------------- Route handler registration ----------------- */
/* ---------------------------------------------------------------- */

/* ---- (Dashboard) ---- */
// The route localhost:8081/people is registered to the function
// routes.getAllPeople, specified in routes.js.
app.get('/api/test/campaign', routes.getTestCampaign);

/* ---- Part 2 (FindFriends) ---- */
// TODO: (2) - Add route '/friends/:login' for the functionality of FindFriends page
// app.get('/friends/:login', routes.getFriends); // Hint: Replace () => {} with the appropriate route handler in routes.js.

// Connects React app with Express server in production
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// set port
const port = process.env.PORT || 8081;
app.listen(port);

console.log(`Listening on ${port}`);
