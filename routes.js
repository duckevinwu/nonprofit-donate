const https = require('https');

function getTestCampaign(req, res) {

  var id = '33663'
  var token = 'fRCCKAagu6dKmvv1JrQuBC8EAHj7g3RdoxZ5gLqp'

  var options = {
    host: 'api.givebutter.com',
    path: `/v1/campaigns/${id}`,
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}`}
  }

  https.get(options, (result) => {
    // console.log('statusCode:', result.statusCode);
    // console.log('headers:', result.headers);

    result.on('data', (d) => {
      // process.stdout.write(d);
      res.send(d)
    });

  }).on('error', (e) => {
    console.error(e);
  });
}

// The exported functions, which can be accessed in index.js.
module.exports = {
  getTestCampaign: getTestCampaign
}


/* -------------------- */
/* ---TEMPLATE CODE---- */
/* -------------------- */


// var config = require('./db-config.js');

// Code below for testing in production and database

/*

var config = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
}

var mysql = require('mysql');

config.connectionLimit = 10;
var connection = mysql.createPool(config);

*/

/* -------------------------------------------------- */
/* ------------------- Route Handlers --------------- */
/* -------------------------------------------------- */

/* ---- (Dashboard) ----

function getAllPeople(req, res) {
  var query = `
    SELECT login, name, birthyear
    FROM Person;
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      res.json(rows);
    }
  });
};

*/

/* ---- Part 2 (FindFriends) ----
function getFriends(req, res) {
  var inputLogin = req.params.login;

  // TODO: (3) - Edit query below
  var query = `
    SELECT f.friend, p.name
    FROM Friends f JOIN Person p ON f.friend=p.login
    WHERE f.login='${inputLogin}'
  `;
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else {
      console.log(rows);
      res.json(rows);
    }
  });
};
*/
