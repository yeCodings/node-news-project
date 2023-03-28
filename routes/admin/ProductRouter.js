var express = require('express');
const ProductController = require('../../controllers/admin/ProductController')
var ProductRouter = express.Router();

// 涉及图片上传 ，普通post无法完成，需要multer 中间件
const multer = require('multer');

// 创建一个存放上传文件的文件夹public/newsUploads 
const upload = multer({ dest: 'public/productsUploads/' })

// 添加产品
ProductRouter.post("/adminapi/product/add", upload.single('file'), ProductController.add);

// 获取产品列表
ProductRouter.get('/adminapi/product/list', ProductController.getList)

// 获取当前产品数据
ProductRouter.get('/adminapi/product/list/:id', ProductController.getList)

// 编辑产品
ProductRouter.post('/adminapi/product/list', upload.single('file'), ProductController.updateList)

// 删除产品
ProductRouter.delete('/adminapi/product/list/:id', ProductController.delList)





module.exports = ProductRouter;