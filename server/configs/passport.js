const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passport = require('passport');

passport.serializeUser((loggedInUser, cb) => {
    cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
    User.findById(userIdFromSession, (err, userDocument) => {
        if (err) {
            cb(err);
            return;
        }
        cb(null, userDocument);
    });
});

passport.use(new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, foundUser) => {
        if (err) {
            next(err);
            return;
        }

        if (!foundUser) {
            next(null, false, { message: 'Incorrect username.' });
            return;
        }

        if (!bcrypt.compareSync(password, foundUser.password)) {
            next(null, false, { message: 'Incorrect password.' });
            return;
        }

        next(null, foundUser);
    });
}));


//----------------------------------------SOFIA INFO------------------------------------------------
//Passport is is a modular authentication middleware for Node.js
//npm install --save passport passport-local express-session
//Strategy: Defines which strategy we are going to use,its configuration, that includes error control
//User serialize and User deserialize : 
//-> helps keep the amount of data in the session as small as we need
//-> functions that define which data is kept in the session + how to recover this info from DB