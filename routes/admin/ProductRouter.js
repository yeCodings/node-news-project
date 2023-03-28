var express = require('express');
const ProductController = require('../../controllers/admin/ProductController')
var ProductRouter = express.Router();

// 涉及图片上传 ，普通post无法完成，需要multer 中间件
const multer = require('multer');

// 创建一个存放上传文件的文件夹public/newsUploads 
const upload = multer({ dest: 'public/productsUploads/' })

// 添加新闻
ProductRouter.post("/adminapi/product/add", upload.single('file'), ProductController.add);


module.exports = ProductRouter;