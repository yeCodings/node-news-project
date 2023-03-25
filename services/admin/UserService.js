
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
  }
}

module.exports = UserService