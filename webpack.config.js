const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // путь к вашему входному файлу
  output: {
    filename: 'bundle.js', // имя выходного файла
    path: path.resolve(__dirname, 'dist'), // папка для собранных файлов
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'), // статический контент
    compress: true, // сжимаем файлы
    port: 9000, // порт для разработки
  },
  module: {
    rules: [
      {
        test: /\.css$/, // правило для CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.mp4$/, // правило для MP4 файлов
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // шаблон для генерации HTML
    }),
    new CleanWebpackPlugin(), // чистка папки dist перед каждой сборкой
  ],
};
