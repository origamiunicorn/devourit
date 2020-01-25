require("dotenv").config();
var mysql = require("mysql");
var keys = require("../keys.js");
var connection;

var db_pw = keys.db.pw;
var db_name = keys.db.name

// Set up connection to Pie DB
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: db_pw,
        database: db_name
    })
}

// Set up connection
connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

// Export connection (to wherever required)
module.exports = connection;