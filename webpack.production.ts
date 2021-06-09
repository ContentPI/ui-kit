import { merge } from 'webpack-merge'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import common from './webpack.common'

export default merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [new ForkTsCheckerWebpackPlugin()]
})
