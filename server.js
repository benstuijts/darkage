'use strict';
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const  morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo')(session);

/* Database */
mongoose.connect('localhost:27017/darkage-test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

console.log('hello');

/* Middleware*/
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true,
				 //store: new MongoStore({ mongooseConnection: mongoose.connection,
				 //							ttl: 2 * 24 * 60 * 60 })
        }));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(function(req, res, next){
    res.locals.add = function(data) {
        for(var key in data) {
            this[key] = data[key];
        }
    };
    res.locals.add({root: "root data"});
    next();
});

/* View Engine */
app.set('views', './views');
app.set('view engine', 'ejs');

/* Authentication */
const auth = express.Router();
//require('./authentication/app/routes/auth.js')(auth, passport);
//app.use('/auth', auth);

/* Administration */
app.use('/admin', require('.//admin/routes')(db));

app.get('/', function(req, res){
  res.send('hello Node JS 6.3.0 on localserver...');
});

app.listen(1000,function() {
  console.log('app listening on port 1000');
});
