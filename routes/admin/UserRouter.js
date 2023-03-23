
var express = require('express');
const UserController = require('../../controllers/admin/UserController')
var UserRouter = express.Router();

// 图片上传
const multer = require('multer');
const upload = multer({ dest: 'public/avatarUploads/' })

// api路径 /adminapi/user/login 前面一定不能漏掉 / ，否则axios会报 404
UserRouter.post("/adminapi/user/login", UserController.login);
UserRouter.post("/adminapi/user/upload", upload.single('file'), UserController.upload);
// UserRouter.get("/adminapi/user/home", (req, res) => {
//   res.send({ ok: 1 })
// })

module.exports = UserRouter;

