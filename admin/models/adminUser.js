'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminUserSchema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
}, {timestamps: true});

adminUserSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

adminUserSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
}

const adminUser = mongoose.model('adminUser', adminUserSchema);
module.exports = adminUser;
