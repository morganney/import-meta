import { env } from 'node:process'

import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: env.NODE_ENV ?? 'development',
  entry: './src/index.js',
  devtool: false,
  output: {
    clean: true
  },
  module: {
    parser: {
      javascript: {
        importMeta: false
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: 'module'
    })
  ]
}
