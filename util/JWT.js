
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

module.exports = JWT;