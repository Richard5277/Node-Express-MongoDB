// Handle actions for Post collection

var postDatabase = require('../database/post-database');

function getAllPosts(callback) {
  postDatabase.getAllPosts((err, result) => {
    if (err) {
      callback(true, null)
    } else {
      callback(false, result)
    }
  })
}

function deleteSinglePost(postId, callback) {
  postDatabase.deleteSinglePost(postId, (err, result) => {
    if(err) {
      callback(true, null)
    } else {
      callback(false, result)
    }
  })
}

function modifySinglePost(postId, newPostData, callback) {
  postDatabase.modifySinglePost(postId, newPostData, (err, result) => {
    if(err) {
      callback(true, null)
    } else {
      callback(false, result)
    }
  })
}

function createNewPost(postObject, callback) {
  postDatabase.createNewPost(postObject, (err, result) => {
    if (err) {
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