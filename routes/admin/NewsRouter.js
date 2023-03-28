
var express = require('express');
const NewsController = require('../../controllers/admin/NewsController')
var NewsRouter = express.Router();

// 涉及图片上传 ，普通post无法完成，需要multer 中间件
const multer = require('multer');

// 创建一个存放上传文件的文件夹public/newsUploads 
const upload = multer({ dest: 'public/newsUploads/' })

// 添加新闻
NewsRouter.post("/adminapi/news/add", upload.single('file'), NewsController.add);

// 获取新闻数据
NewsRouter.get("/adminapi/news/list", NewsController.getList);

// 更新新闻数据
NewsRouter.post("/adminapi/news/list", upload.single('file'), NewsController.updateList);

// 获取当前新闻数据
NewsRouter.get("/adminapi/news/list/:id", NewsController.getList);

// 发布新闻
NewsRouter.put("/adminapi/news/publish", NewsController.publish);


// 删除新闻
NewsRouter.delete("/adminapi/news/list/:id", NewsController.delList);





module.exports = NewsRouter;

