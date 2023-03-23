
const josnwebtoken = require('jsonwebtoken');

// 创建一个秘钥
const secret = 'yecoding';

const JWT = {
  // 生成token
  generate(value, exprires) {
    return josnwebtoken.sign(value, secret, { expiresIn: exprires });
  },
  // 验证token
  verify(token) {
    try {
      return josnwebtoken.verify(token, secret);
    } catch (error) {
      return false
    }
  }
}

// const token = JWT.generate({ name: 'yecoding' }, '10s');
// console.log(JWT.verify(token))

// setTimeout(() => {
//   console.log(JWT.verify(token))
// }, 11000)

module.exports = JWT;