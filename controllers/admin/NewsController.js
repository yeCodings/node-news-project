const NewsService = require("../../services/admin/NewsService");

const NewsController = {
  add: async (req, res) => {
    const cover = req.file ? `/newsuploads/${req.file.filename}` : ''
    const { title, content, category, isPublish } = req.body
    // 调用service 添加新闻
    await NewsService.add({
      title,                        // 新闻标题
      cover,                        // 封面图片
      content,                      // 新闻内容
      editTime: new Date(),         // 编辑时间
      category: Number(category),   // 新闻类别
      isPublish: Number(isPublish), // 是否发布
    })
    res.send({
      ActionType: 'OK'
    })
  }
}

module.exports = NewsController;