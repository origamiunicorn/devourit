// require the following
var express = require("express");
var router = express.Router();
var pie = require("../models/devourit.js");

// define what the index.html will look like by doing a selectAll of the db, then render index
router.get("/", function (req, res) {
  // run selectAll from the devourit.js model
  pie.selectAll(function (data) {
    var hbsObject = {
      type: "Pie",
      pies: data
    };
    res.render("index", hbsObject);
  });
});

// define how a post request will be handled
router.post("/api/pies", function (req, res) {
  // run insertOne from the devourit.js model
  pie.insertOne(["pieName"], [req.body.name], function (result) {
    // Send back the ID of the new pie, found at insertID in the result object
    res.json({ id: result.insertId });
  });
});

// define how a put request will be handled according to the id parameter
router.put("/api/pies/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  // run updateOne from the devourit.js model
  pie.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      // otherwise respond as successful and end
      res.status(200).end();
    }
  );
});

// export the router
module.exports = router;