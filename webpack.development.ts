import { resolve } from 'path'
import { merge } from 'webpack-merge'
import webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import common from './webpack.common'

export default merge(common, {
  entry: './storybook/index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: resolve(__dirname, './dist'),
    compress: true,
    hot: true,
    port: 3003,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      title: 'Storybook',
      template: './storybook/index.html',
      filename: './index.html',
    }),
  ],
})
