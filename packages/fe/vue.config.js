module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: `http://${process.env.NODE_ENV === 'docker' ? 'backend' : 'localhost'}:3000`,
        ws: false,
        changeOrigin: true,
      },
    },
  },
};