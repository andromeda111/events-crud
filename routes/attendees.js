var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id

  db('attendees').where({id}).then(attendees => {
    var attendee = attendees[0]

    db('attendees').select('attendees.id', 'attendees.preferred_name', 'attendees.last_name', 'attendees.birthday', 'attendees.email', 'tickets.events_id', 'events.title', 'events.description', 'over_21', 'events.img_url', 'events.start_datetime', 'events.end_datetime').innerJoin('tickets_attendees', 'attendees.id', 'tickets_attendees.attendees_id').innerJoin('tickets', 'tickets.id', 'tickets_attendees.tickets_id').innerJoin('events', 'tickets.events_id', 'events.id').orderBy('events.start_datetime', 'ASC').then(collection => {
      console.log(collection);

      res.render('pages/attendees', { attendee, collection });
    })
  })
});

module.exports = router;
