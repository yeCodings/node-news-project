

const UserService = require('../../services/admin/UserService');
const JWT = require('../../util/JWT');


const UserController = {

  // 用户登录
  login: async (req, res) => {
    var result = await UserService.login(req.body);
    if (result.length === 0) {
      res.send({
        code: '-1',
        error: '用户名密码不匹配'
      })
    } else {

      // 生成token
      const token = JWT.generate({
        _id: result[0]._id,
        username: result[0].username
      }, '1d');

      // 把token 写入 Authorization中，然后在res.data 中返回相关数据
      res.header('Authorization', token);
      res.send({
        ActionType: 'OK',
        data: {
          username: result[0].username,
          gender: result[0].gender ? result[0].gender : 0,
          introduction: result[0].introduction,
          avatar: result[0].avatar,
          // role 拼写成了 rule 导致前端没能取到role的值
          role: result[0].role,
        }
      })
    }
  },

  // 文件上传相关处理
  upload: async (req, res) => {
    const { username, gender, introduction } = req.body;
    // 拿到图片信息，拼接地址
    const avatar = req.file ? `/avatarUploads/${req.file.filename}` : '';
    const token = req.headers['authorization'].split(' ')[1];
    var payload = JWT.verify(token);
    // 调用service 模块更新数据
    await UserService.upload({
      avatar,
      username,
      introduction,
      _id: payload._id,
      gender: Number(gender)
    });
    res.send({
      ActionType: 'OK',
      data:
        avatar ?
          {
            avatar,                   // 头像
            username,                 // 用户名
            introduction,             // 简介
            gender: Number(gender)    // 性别
          }
          :
          {
            username,                 // 用户名
            introduction,             // 简介
            gender: Number(gender)    // 性别
          }
    })
  },

  // 添加用户
  add: async (req, res) => {
    const { username, gender, introduction, password, role } = req.body;
    const avatar = req.file ? `/avatarUploads/${req.file.filename}` : '';
    // 调用service 模块添加用户数据
    await UserService.add({
      avatar,
      password,
      username,
      introduction,
      role: Number(role),
      gender: Number(gender)
    });
    res.send({
      ActionType: 'OK',
    })
  },
}

module.exports = UserController;
