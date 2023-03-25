
var express = require('express');
const UserController = require('../../controllers/admin/UserController')
var UserRouter = express.Router();

// 图片上传
const multer = require('multer');
// 创建一个存放上传文件的文件夹public/avatarUploads 
const upload = multer({ dest: 'public/avatarUploads/' })

// api路径 /adminapi/user/login 前面一定不能漏掉 / ，否则axios会报 404

// 用户登录
UserRouter.post("/adminapi/user/login", UserController.login);

// 上传用户信息
UserRouter.post("/adminapi/user/upload", upload.single('file'), UserController.upload);

// 添加用户
UserRouter.post("/adminapi/user/add", upload.single('file'), UserController.add);


module.exports = UserRouter;

