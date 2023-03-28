const ProductModel = require("../../models/ProductModel")

const ProductService = {

  // 添加产品
  add: async ({ title, introduction, detail, author, cover, editTime }) => {
    return ProductModel.create({
      title, introduction, detail, author, cover, editTime,
    })
  },

  // 
}

module.exports = ProductService