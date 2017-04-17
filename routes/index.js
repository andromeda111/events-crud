var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db('events').select('events.title', 'events.start_datetime', 'venues.name', 'venues.capacity', 'tickets.events_id').innerJoin('venues', 'events.venues_id', 'venues.id').innerJoin('tickets', 'tickets.events_id', 'events.id').then(result => {
    // console.log(collection);
    var collection = []
    result.forEach(function(e) {
      if(!this[e.events_id]) {
        console.log(e);
        this[e.events_id] = true;
        collection.push(e)
      }
    }, {})

    res.render('pages/index', { collection });
  })
})

module.exports = router;
