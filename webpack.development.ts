import { resolve } from 'path'
import { merge } from 'webpack-merge'
import webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import common from './webpack.common'

export default merge(common, {
  entry: './storybook/index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: resolve(__dirname, './dist'),
    compress: true,
    hot: true,
    port: 3003
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      title: 'Storybook',
      template: './storybook/index.html',
      filename: './index.html'
    })
  ]
})
