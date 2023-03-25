
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

// 获取用户列表
UserRouter.get('/adminapi/user/list', UserController.getList);

// 编辑用户
UserRouter.get('/adminapi/user/list/:id', UserController.getList);

// 更新用户列表
UserRouter.put('/adminapi/user/list/:id', UserController.putList);

// 删除用户
UserRouter.delete('/adminapi/user/list/:id', UserController.delList);





module.exports = UserRouter;

