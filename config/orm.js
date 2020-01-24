// Require the exported module in connection.js
var connection = require("./connection.js");

var orm = {
    // build an object function to select all from pies table
    selectAll: function (tableInput) {
        // Build a query for selecting all elements from a given table
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    // build an object function to insert one row into a table
    insertOne: function (tableInput, colName, colVal) {
        // build a query for inserting one row of information with one column value defined, as in this case, the table generates ids automatically and defaults the devoured column to false
        var queryString = "INSERT INTO ?? (??) VALUES ?";
        console.log(queryString);

        connection.query(queryString, [tableInput, colName, colVal], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    // build an object function to update one row in a table
    updateOne: function (tableInput, colName, colVal, colValId) {
        // build a query to update a row of data when a value has been changed, in this case, set devoured to true at a specific id when that pie has been eaten
        var queryString = "UPDATE ?? SET ?? = ?? WHERE ?? = ??";

        connection.query(
            queryString, [tableInput, colName, colVal, colValId],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

// Export orm object
module.exports = orm;