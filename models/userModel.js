
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// user模型 => user集合

const userType = {
  username: String,
  password: String,
  gender: Number, // 性别： 0-保密， 1-男， 2-女
  introduction: String,
  avatar: String,
  role: Number, // 管理员-1 ，编辑-2
}

// 注意这里的是一个新的Schema对象   new Schema(userType) 
const UserModel = mongoose.model('user', new Schema(userType));

module.exports = UserModel;
