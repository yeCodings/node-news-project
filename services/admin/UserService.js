
const UserModel = require("../../models/UserModel")

const UserService = {
  login: async ({ username, password }) => {
    return UserModel.find({
      username,
      password
    })
  },
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
  }
}

module.exports = UserService