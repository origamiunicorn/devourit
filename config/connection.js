var mysql = require("mysql");

// Set up connection to Pie DB
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "h3ll0",
    database: "pie_db"
});

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