var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', userSchema);