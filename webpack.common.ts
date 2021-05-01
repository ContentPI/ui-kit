import { resolve } from 'path'

const webpackConfig: any = {
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'lib',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            include: [resolve(__dirname, './src/components/Spinner/loaders')],
            use: 'svg-url-loader'
          },
          {
            include: resolve(__dirname, './src/components/Icon'),
            use: '@svgr/webpack'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      react: resolve(__dirname, './node_modules/react'),
      'react-dom': resolve(__dirname, './node_modules/react-dom'),
      '@components': resolve(__dirname, 'src', 'components'),
      '@theme': resolve(__dirname, 'src', 'theme'),
      '@types': resolve(__dirname, 'src', 'types')
    },
    fallback: { crypto: false }
  }
}

export default webpackConfig
