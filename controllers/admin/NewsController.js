const NewsService = require("../../services/admin/NewsService");

const NewsController = {
  // 创建新闻
  add: async (req, res) => {
    const cover = req.file ? `/newsuploads/${req.file.filename}` : ''
    const { title, content, category, isPublish, author } = req.body
    // 调用service 添加新闻
    await NewsService.add({
      title,                        // 新闻标题
      cover,                        // 封面图片
      author,                       // 当前作者
      content,                      // 新闻内容
      editTime: new Date(),         // 编辑时间
      category: Number(category),   // 新闻类别
      isPublish: Number(isPublish), // 是否发布
    })
    res.send({
      ActionType: 'OK'
    })
  },
  // 获取所有新闻列表
  getList: async (req, res) => {
    const result = await NewsService.getList({ _id: req.params.id })
    res.send({
      ActionType: 'OK',
      data: result,
      author: result
    })
  },
  // 发布新闻
  publish: async (req, res) => {
    await NewsService.publish({
      ...req.body,
      editTime: new Date()
    })
    res.send({
      ActionType: 'OK',
    })
  },
  // 删除新闻
  delList: async (req, res) => {
    await NewsService.delList({ _id: req.params.id });
    res.send({
      ActionType: 'OK',
    })
  },
  // 更新新闻
  updateList: async (req, res) => {
    const cover = req.file ? `/newsuploads/${req.file.filename}` : ''
    const { title, content, category, isPublish, _id } = req.body
    // 调用service 添加新闻
    await NewsService.updateList({
      _id,
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