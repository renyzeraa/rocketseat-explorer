module.exports = {
  apps: [
    {
      name: 'app',
      script: './src/server.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'worker',
      script: 'worker.js'
    }
  ]
}
