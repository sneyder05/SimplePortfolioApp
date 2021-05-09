const path = require('path')
const withAntdLess = require('next-plugin-antd-less')

const less = withAntdLess()

module.exports = {
  ...less,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  distDir: 'dist',
}