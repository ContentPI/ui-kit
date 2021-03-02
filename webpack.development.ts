import { resolve } from 'path'
import { merge } from 'webpack-merge'
import webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import common from './webpack.common'

export default merge(common, {
  entry: './sandbox/index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: resolve(__dirname, './dist'),
    compress: true,
    hot: true,
    port: 3000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      title: 'Sandbox',
      template: './sandbox/index.html',
      filename: './index.html'
    })
  ]
})