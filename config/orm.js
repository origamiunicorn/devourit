// Require the exported module in connection.js
var connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax, used for updateOne
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations 
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // return a string
    return arr.toString();
}

var orm = {
    // build an object function to select all from pies table
    selectAll: function (tableInput, cb) {
        // Build a query for selecting all elements from a given table using template literals
        var queryString = `SELECT * FROM ${tableInput};`;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    // build an object function to insert one row into a table
    insertOne: function (tableInput, colName, colVal, cb) {
        // Build a query for inserting a new row using template literals
        var queryString = `INSERT INTO ${tableInput} (${colName.toString()}, devoured) VALUES ('${colVal}', false)`;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    // build an object function to update one row in a table
    updateOne: function (tableInput, colVal, condition, cb) {
        // Build a query for updating a row using template literals and a callback function
        var queryString = `UPDATE ${tableInput} SET ${objToSql(colVal)} WHERE ${condition}`;

        connection.query(
            queryString,
            function (err, result) {
                if (err) {
                    throw err;
                };
                cb(result);
            }
        );
    }
};

// Export orm object
module.exports = orm;