const NewsModel = require("../../models/NewsModel")

const NewsService = {

  // 创建新闻
  add: async ({ title, cover, content, category, isPublish, editTime, author }) => {
    return NewsModel.create({
      title, cover, content, category, isPublish, editTime, author
    })
  },

  //  获取当前列表数据 || 获取所有新闻列表
  getList: async ({ _id }) => {
    return _id ? NewsModel.find({ _id }) : NewsModel.find({})
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

  // 更新新闻
  updateList: async ({ _id, title, cover, content, category, isPublish, editTime }) => {
    return NewsModel.updateOne({ _id },
      cover ?
        { title, cover, content, category, isPublish, editTime }
        : { title, content, category, isPublish, editTime }
    )
  }
}

module.exports = NewsService