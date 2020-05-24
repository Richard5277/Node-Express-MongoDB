// Setup Post Model

var mongoose = require('mongoose')
var Schema = mongoose.Schema

function getPostSchema() {
  return new Schema({
    title: String,
    content: String
  })
}

module.exports = {
  getPostSchema
}