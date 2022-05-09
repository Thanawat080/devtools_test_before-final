const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    user_name: String,
    password: String,
    first_name: String,
    last_name: String,
    pic:String,
    type: String,
  })

const UserModel = mongoose.model('user', userSchema, 'user')

module.exports = UserModel


