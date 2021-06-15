import { merge } from 'webpack-merge'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import common from './webpack.common'

export default merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [new ForkTsCheckerWebpackPlugin()],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
  }
})
