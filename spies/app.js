const db = require('./db');

module.exports.handleSignup = (email, password) => {
    // checks if email exists
    // save user to database
    db.saveUser({email, password});
    // send welcome email
};