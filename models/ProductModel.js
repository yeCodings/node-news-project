
const mongoose = require('mongoose');
const Schema = mongoose.Schema

// Product模型 => Product集合

const ProductType = {
  author: String,
  title: String,
  introduction: String,
  detail: String,
  cover: String,     // 封面
  editTime: Date,    // 编辑时间
}

// 注意这里的是一个新的Schema对象   new Schema(ProductType) 
const ProductModel = mongoose.model('product', new Schema(ProductType));

module.exports = ProductModel;