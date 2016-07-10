var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    created_at: Date
})

exports.model = mongoose.model("User", UserSchema);

UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next(); 
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, null, function (res, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    })
});

