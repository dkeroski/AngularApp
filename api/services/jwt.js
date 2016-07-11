var crypto = require('crypto');

exports.encode = function(playload, secret) {
    algorithm = 'HS256';
    var header = {
        typ: 'JWT',
        alg: algorithm
    };
    var jwt = base64Encoded(JSON.stringify(header)) + '.' + base64Encoded(JSON.stringify(playload));
    return jwt + '.' + sign(jwt, secret);
}

function sign(str, key) {
    return crypto.createHmac('sha256', key).update(str).digest('base64');
}

function base64Encoded(str) {
    return new Buffer(str).toString('base64');
}