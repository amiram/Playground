'use strict';

var express = require('express');

var app = express();
var nano = require('nano')('http://localhost:5984');

var dbName = 'starter';
nano.db.destroy(dbName, function() {
    nano.db.create(dbName, function() {
        var db = nano.use(dbName);
        db.insert({a: 1}, 'doc', function(err, body, header){
            if (err){
                console.log(err.message);
                return;
            }
            console.log(body);
        })
    });
});



