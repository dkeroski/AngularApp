var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//disign user model Schema
var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: String,
    password: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

// custom method to hashing password
//before save the new user, hashed the password
userSchema.pre('save', function(next) {
        var user = this;
        if (!user.isModified('password')) return next();
        bcrypt.genSalt(11, function(err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, null, function(err, hashedPassword) {
                if (err) return next(err);
                user.password = hashedPassword;
                next();
            })
        })
    })
    // the schema is useless so far
    // we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;