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

exports.create = function(req, res){
  Contacts
    .findOne({}, {}, { sort: { 'id' : -1 } }, function(err, contact) {
        req.body.id = contact._doc.id + 1;
        Contacts
          .create(req.body, function(err, contact) {
            if(err) { return handleError(res, err); }
            return res.json(201, contact);
          });
    });
};

exports.destroy = function(req, res) {
  Contacts
    .findOne({ id: req.params.id }, function (err, contact){
        if (err) { return handleError(res, err); }
        if(!contact) { return res.send(404); }
        contact.remove(function(err) {
          if(err) { return handleError(res, err); }
          return res.send(204);
        });
    });
};

exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Contacts
    .findOne({ id: req.body.id }, function (err, contact){
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
