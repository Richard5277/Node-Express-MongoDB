// Define mongodb posts schema collection

var mongoose = require('mongoose');
var Schema = require('../model/post-model').getPostSchema();
var postModel = mongoose.model('posts', Schema);

function getAllPosts(callback) {
  postModel.find((err, result) => {
    if(err) {
      callback(true, null)
    } else {
      callback(false, result)
    }
  })
}

function deleteSinglePost(postId, callback) {
  postModel.findByIdAndDelete(postId, (err, result) => {
    if(err) {
      callback(true, null)
    } else {
      callback(false, result)
    }
  })
}

function createNewPost(postObejct, callback) {
  var newPost = new postModel(postObejct)
  newPost.save(function(err, result){
    if(err) {
      callback(true, null)
    } else {
      callback(false, result)
    }
  })
}

function modifySinglePost(postId, newPostData, callback) {
  postModel.findByIdAndUpdate(postId, newPostData, (err, result) => {
    if(err) {
      callback(true, null)
    } else {
      callback(false, result)
    }
  })
}

module.exports = {
  getAllPosts,
  createNewPost,
  deleteSinglePost,
  modifySinglePost
}