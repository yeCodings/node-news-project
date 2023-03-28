const ProductService = require("../../services/admin/ProductService");

const ProductController = {
  // 创建产品
  add: async (req, res) => {
    const cover = req.file ? `/productsUploads/${req.file.filename}` : ''
    const { title, introduction, detail, author } = req.body
    // 调用service 添加产品
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
  // 获取产品列表
  getList: async (req, res) => {
    const result = await ProductService.getList({ _id: req.params.id })
    res.send({
      ActionType: 'OK',
      data: result
    })
  },
  // 删除产品
  delList: async (req, res) => {
    const result = await ProductService.delList({ _id: req.params.id })
    res.send({
      ActionType: 'OK',
      data: result
    })
  },
  // 编辑产品
  updateList: async (req, res) => {
    const cover = req.file ? `/productsUploads/${req.file.filename}` : ''
    const { title, introduction, detail, author, _id } = req.body
    await ProductService.updateList({
      _id,
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

  }
}

module.exports = ProductController;