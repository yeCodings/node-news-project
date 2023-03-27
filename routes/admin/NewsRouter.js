
var express = require('express');
const NewsController = require('../../controllers/admin/NewsController')
var NewsRouter = express.Router();

// 涉及图片上传 ，普通post无法完成，需要multer 中间件
const multer = require('multer');

// 创建一个存放上传文件的文件夹public/newsUploads 
const upload = multer({ dest: 'public/newsUploads/' })

// 添加新闻 || 编辑新闻
NewsRouter.post("/adminapi/news/add", upload.single('file'), NewsController.add);







module.exports = NewsRouter;

