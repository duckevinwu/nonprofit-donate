const https = require('https');
const NodeCache = require( "node-cache" );
var Airtable = require('airtable');

const apiCache = new NodeCache();
var nonprofitBase = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('app9tFZaPm5svETpk');

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
      try {
        // convert buffer to json
        const resultJson = JSON.parse(d);
        res.json(resultJson);
      } catch (error) {
        console.error(error)
      }
    });

  }).on('error', (e) => {
    console.error(e);
  });
}

function getNonprofits(req, res) {
  let startIndex = req.params.index || 1;
  getRecords(res, true, startIndex, 0);
}

// get correct chunk of records from Airtable and cache result
function getRecords(res, isChunk, startIndex, exactIndex) {
  let cacheNonprofits = apiCache.get(`nonprofits-${startIndex}`);
  if (cacheNonprofits) {
    if (isChunk) {
      res.json({status: 'success', cache: 'yes', records: cacheNonprofits})
    } else {
      res.json({status: 'success', cache: 'yes', record: cacheNonprofits[exactIndex]});
    }
  } else {
    // make api call
    nonprofitBase('Nonprofits').select({
      filterByFormula: `AND({id} >= ${startIndex}, {id} < ${startIndex + 100})`,
      pageSize: 100,
      sort: [{field: "id", direction: "asc"}]
    }).firstPage(function(err, records) {
      if (err) {
        console.error(err);
        res.json({status: 'fail', message: 'error retrieving from airtable'});
      }

      let apiRecords = {};
      records.forEach(function(record) {
        apiRecords[record.get("id")] = record.fields;
      });

      let setCache = apiCache.set(`nonprofits-${startIndex}`, apiRecords, 30);
      if (setCache) {
        if (isChunk) {
          res.json({status: 'success', cache: 'no', records: apiRecords})
        } else {
          res.json({status: 'success', cache: 'no', records: apiRecords[exactIndex]})
        }
      } else {
        res.json({status: 'fail', message: 'error setting cache'})
      }
    });
  }
}

// The exported functions, which can be accessed in index.js.
module.exports = {
  getTestCampaign: getTestCampaign,
  getNonprofits: getNonprofits
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
