const NewsModel = require("../../models/NewsModel")

const NewsService = {
  add: async ({ title, cover, content, category, isPublish, editTime }) => {

    return NewsModel.create({
      title, cover, content, category, isPublish, editTime
    })
  }
}

module.exports = NewsService