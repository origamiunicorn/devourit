// import orm from its folder to here
var orm = require("../config/orm.js");

var pie = {
    selectAll: function (cb) {
        orm.selectAll("pies", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("pies", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("pies", objColVals, condition, function (res) {
            cb(res);
        });
    }
}

module.exports = pie;