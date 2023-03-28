const NewsModel = require("../../models/NewsModel")

const NewsService = {

  // 创建新闻
  add: async ({ title, cover, content, category, isPublish, editTime }) => {
    return NewsModel.create({
      title, cover, content, category, isPublish, editTime
    })
  },

  // 获取所有新闻列表
  getList: async () => {
    return NewsModel.find({})
  },

  // 发布新闻
  publish: async ({ _id, isPublish, editTime }) => {
    return NewsModel.updateOne({ _id }, {
      isPublish,
      editTime
    })
  },

  // 删除新闻
  delList: async ({ _id }) => {
    return NewsModel.deleteOne({ _id })
  },

}

module.exports = NewsService