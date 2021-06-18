import { resolve } from 'path'
import createStyledComponentsTransformer from 'typescript-styled-components-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'fonts.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: (program: any) => ({
            before: [
              createStyledComponentsTransformer(program, {
                setComponentId: true,
                setDisplayName: true,
                minify: true
              })
            ]
          })
        }
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
      'react-dom': resolve(__dirname, './node_modules/react-dom')
    },
    fallback: {
      buffer: require.resolve('buffer/'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify')
    }
  }
}

export default webpackConfig
