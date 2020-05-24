var express = require('express');
var router = express.Router();
var postModel = require('../mongodb/model/post-model') // with ts file module configuraton to post data
var postModelImplementation = require('../mongodb/implementation/post-impl')

router.get('/', function(req, res, next) {
  res.send('Welcome to Express !');
});

router.get('/posts', function(req, res, next) {
  postModelImplementation.getAllPosts((err, result) => {
    if(err) {
      next(err)
    } else {
      res.send(JSON.stringify(result))
    }
  })
});

router.delete('/post-delete/:id', async function(req, res, next) {
  const postId = req.params.id
  postModelImplementation.deleteSinglePost(postId, (err, result) => {
    if (err) {
      next(err)
    } else {
      res.status(204).send();
      // res.end();
    }
  })
})

router.put('/post-edit/:id', async function(req, res, next) {
  const postId = req.params.id
  const newPostData = { title: req.body.title, content: req.body.content };
  postModelImplementation.modifySinglePost(postId, newPostData, (err, result) => {
    if (err) {
      next(err)
    } else {
      // result is still presenting the old data
      res.status(204).send();
      // res.end();
    }
  })
})

router.post('/addPost', function(req, res, next){
  var newPostObject = {
    title: req.body.title,
    content: req.body.content
  }
  postModelImplementation.createNewPost(newPostObject, (err, result) => {
    if(err) {
      next(err)
    } else {
      res.end();
    }
  })
})

module.exports = router;