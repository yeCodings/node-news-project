
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
  // 获取用户列表 & 传id时为 编辑当前id用户
  getList: async ({ id }) => {
    // 取出所有的用户信息, 可以在find的第二个参数数组里面添加要查询的信息
    return id ?
      UserModel.find({ _id: id }, ['username', 'avatar', 'role', 'introduction', 'password', 'gender'])
      : UserModel.find({}, ['username', 'avatar', 'role', 'introduction', 'gender']);
  },
  // 更新用户
  putList: async (body) => {
    return UserModel.updateOne({ _id: body._id }, body)
  },
  // 删除用户
  delList: async ({ _id }) => {
    return UserModel.deleteOne({ _id });
  },
}

module.exports = UserService