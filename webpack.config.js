const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Точка входа (файл, с которого начинается сборка)
  output: {
    filename: 'bundle.js',  // Название выходного файла
    path: path.resolve(__dirname, 'dist'),  // Папка для сборки
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),  // Папка для обслуживания
    compress: true,
    port: 9000,  // Порт сервера
  },
  plugins: [
    new CleanWebpackPlugin(),  // Очистка dist папки перед сборкой
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Шаблон HTML файла
      filename: 'index.html',  // Название выходного файла
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,  // Обработка файлов .css
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,  // Обработка изображений
        type: 'asset/resource',
      },
    ],
  },
};
