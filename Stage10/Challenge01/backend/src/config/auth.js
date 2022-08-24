module.exports = {
  jwt: {
    secret: process.env.AUTH_SECRETE || 'default',
    expiresIn: '1d'
  }
}
