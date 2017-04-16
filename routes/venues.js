var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id

  db('venues').where({id}).then(venues => {
    var venue = venues[0]
    db('venues').select('venues.name', 'events.id', 'events.title', 'events.description', 'over_21', 'events.start_datetime', 'events.end_datetime').innerJoin('events', 'events.venues_id', 'venues.id').orderBy('events.start_datetime', 'ASC').then(collection => {
      console.log(collection[0]);


      res.render('pages/venues', { venue, collection });
    })
  })
});

module.exports = router;
