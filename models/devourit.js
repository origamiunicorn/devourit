// import orm from its folder to here
var orm = require("../config/orm.js");

// make the pie variable and define the object functions
var pie = {
    // selectAll to take all pies from the db
    selectAll: function (cb) {
        orm.selectAll("pies", function (res) {
            cb(res);
        });
    },
    // insertOne to add one row of data to pie table in db
    insertOne: function (cols, vals, cb) {
        orm.insertOne("pies", cols, vals, function (res) {
            cb(res);
        });
    },
    // updateOne to update devoured boolean in pie table in db
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("pies", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// exort pie to where it's required
module.exports = pie;