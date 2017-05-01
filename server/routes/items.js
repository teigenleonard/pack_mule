//GLOBALS
var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');

// CALLS
// Handles POST request with postItem data
router.post('/', function(req, res, next) {
    var newItem = {
        name: req.body.name,
        quantity: req.body.quantity
    };
    console.log('newItem: ', newItem);

    pg.connect(connection, function(err, db, done) {
        if (err) {
            console.log('Error Connecting: ', err);
            next(err);
        }
        db.query(' INSERT INTO "items" ("name", "quantity" ) ' +
            ' VALUES ( $1, $2 ); ', [newItem.name, newItem.quantity],
            function(queryError, result) {
                done();
                if (queryError) {
                    console.log('Error making query.');
                    res.send(500);
                } else {
                    res.sendStatus(201);
                }
            });
    });

});
//EXPORT
module.exports = router;