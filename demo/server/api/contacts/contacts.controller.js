'use strict';

var _ = require('lodash');
var Contacts = require('./contacts.model');

exports.index = function(req, res) {
  Contacts
    .find(function (err, contacts) {
       if(err) { return handleError(res, err); }
       return res.json(200, contacts);
    });
};

exports.show = function(req, res) {
  Contacts
  	.findOne({ id: req.params.id }, function (err, contact) {
	    if(err) { return handleError(res, err); }
	    if(!contact) { return res.send(404); }
	    return res.json(contact);
  	});
};

exports.update = function(req, res) {
  Contacts
    .findOne({ id: req.params.id },  function (err, contact) {
        if (err) { return handleError(res, err); }
        if(!contact) { return res.send(404); }
        var updated = _.merge(contact, req.body);
        updated
          .save(function (err) {
            if (err) { return handleError(res, err); }
            return res.json(200, contact);
        });
    });
};
