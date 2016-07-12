var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('../models/Post');
require('../models/User');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
router.use(function(req, res, next) {


    //continue to next midleware
    if (req.method === "GET") {
        return next();
    }
    if (!req.isAuthenticated()) {
        res.redirect('/#login');
    }
})

//api for all posts
router.route('/posts')
    .get(function(req, res) {
        Post.find(function(err, data) {
            if (err) {
                return res.send(500, err);
            }
            return res.send(data);
        })
    })
    .post(function(req, res) {
        var newPost = new Post();
        newPost.title = req.body.title;
        newPost.text = req.body.text;
        newPost.created_by = req.body.created_by;
        newPost.save(function(err, newPost) {
            if (err) {
                return res.send(500, err);
            }
            return res.json(newPost);
        })
    });
//get items with id
//put update item with id
router.route('/posts/:id')
    .get(function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if (err) res.send(err);
            res.json(post);
        })
    })

.put(function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        if (err) {
            res.send(err);
        }
        post.created_by = req.body.created_by;
        post.title = req.body.title;
        post.text = req.body.text;

        post.save(function(err, post) {
            if (err) res.semd(err);
            res.json(post);
        })
    })
})

.delete(function(req, res) {
    Post.remove({
            _id: req.params.id
        },
        function(err) {
            if (err) res.send(err);
            res.json('Post is deleted');
        })
})


module.exports = router;