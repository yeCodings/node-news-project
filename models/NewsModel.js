
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// News模型 => News集合

const NewsType = {
  author: String,
  title: String,
  content: String,
  category: Number,  // 性别： 1-最新动态， 2-典型案例， 3-通知公告
  cover: String,     // 封面
  isPublish: Number, // 未发布，已发布
  editTime: Date,    // 编辑时间
}

// 注意这里的是一个新的Schema对象   new Schema(NewsType) 
const NewsModel = mongoose.model('news', new Schema(NewsType));

module.exports = NewsModel;