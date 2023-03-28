const ProductService = require("../../services/admin/ProductService");

const ProductController = {
  // 创建新闻
  add: async (req, res) => {
    const cover = req.file ? `/productsUploads/${req.file.filename}` : ''
    const { title, introduction, detail, author } = req.body
    // 调用service 添加新闻
    await ProductService.add({
      title,                        // 产品名称
      cover,                        // 产品图片
      author,                       // 当前作者
      introduction,                 // 产品简介
      detail,                       // 产品详情
      editTime: new Date(),         // 编辑时间
    })
    res.send({
      ActionType: 'OK'
    })
  },

}

module.exports = ProductController;