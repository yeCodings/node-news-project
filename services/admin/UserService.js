
const UserModel = require("../../models/UserModel")

const UserService = {
  // 登录
  login: async ({ username, password }) => {
    return UserModel.find({
      username,
      password
    })
  },
  // 文件上传
  upload: async ({ _id, introduction, username, gender, avatar }) => {
    return UserModel.updateOne({
      _id
    },
      avatar ?
        {
          avatar,
          gender,
          username,
          introduction,
        }
        :
        {
          gender,
          username,
          introduction,
        }
    )
  },
  // 添加用户
  add: async ({ role, password, introduction, username, gender, avatar }) => {
    // UserModel.create 向数据库插入一条数据
    return UserModel.create({
      role,
      avatar,
      gender,
      password,
      username,
      introduction,
    })
  },
  // 获取用户列表
  getList: async () => {
    // 取出所有的用户信息, 可以在find的第二个参数数组里面添加要查询的信息
    return UserModel.find({}, ['username', 'avatar', 'role', 'introduction', 'gender']);
  },
  // 删除用户
  delList: async ({ _id }) => {
    return UserModel.deleteOne({ _id });
  }
}

module.exports = UserService