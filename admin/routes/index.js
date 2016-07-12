/*
  /admin/routes/index.js

  Administration routes

*/

'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const adminUser = require('../models/adminUser');
const utils = require('../../own_modules/utils')
const token = utils.randomString(32);

module.exports = function(db) {

/* Middleware */
router.use(function(req, res,next){
  res.locals.add({admin: "Admin Data"});
  next();
});
/* protect your POST routes with CSRF = Cross Site Request Forgery */
router.use(function(req, res, next){
  if(req.method === "POST") {
    if(req.query.token !== token) {
      res.end('invalid input token');
    } else {
      next();
    }
  } else {
    next();
  }
});

adminUser.remove({}, function(error){
  if(error) console.log(error);
})

let admin = new adminUser();

admin.name = "Ben Stuijts";
admin.password = admin.generateHash("feyenoord");

admin.save(function(error){
  utils.errorHandling(error);
});

/* Routes */
router.get('/', function(req, res){
  res.render('admin/login');
});

router.get('/locals', function(req, res) {
  res.json(res.locals);
});

router.get('/token', function(req, res){
  res.send(token);
});

router.get('/users', function(req, res){
    adminUser.find({}, function(error, users){
      utils.errorHandling(error);
      res.end('<pre>' + users + '</pre>' + req.method);
    });
});

router.get('/login', function(req, res){
  let name = "Ben Stuijts";
  let password = "feyenoord";
  let tokenFromClient = token;

  if(tokenFromClient !== token) {
    res.send('invalid input token');
    return false;
  }

  adminUser.findOne({ name: name }, function(error, user){
    if(error) console.log(error);
    if(user.validPassword(password)) {
      res.send('name and password valid, welcome' + user);
    } else {
      res.send('no valid password of name!' + user);
    }
  });
});

return router;
}
