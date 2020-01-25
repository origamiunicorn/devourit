var mysql = require("mysql");
var connection;

// Set up connection to Pie DB
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "h3ll0",
        database: "pie_db"
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