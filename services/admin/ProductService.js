const ProductModel = require("../../models/ProductModel")

const ProductService = {

  // 添加产品
  add: async ({ title, introduction, detail, author, cover, editTime }) => {
    return ProductModel.create({
      title, introduction, detail, author, cover, editTime,
    })
  },

  // 获取产品列表
  getList: async ({ _id }) => {
    return _id ? ProductModel.find({ _id }) : ProductModel.find({})
  },

  // 删除产品
  delList: async ({ _id }) => {
    return ProductModel.deleteOne({ _id })

  },
  // 编辑产品
  updateList: async ({ _id, title, introduction, detail, author, cover }) => {
    return ProductModel.updateOne({ _id },
      cover
        ? { title, introduction, detail, author, cover }
        : { title, introduction, detail, author }
    )
  }
}

module.exports = ProductService