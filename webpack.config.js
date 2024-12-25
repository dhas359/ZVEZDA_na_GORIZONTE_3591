const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',  // Явно указываем режим ('development' или 'production')
  entry: './src/index.js',  // Точка входа
  output: {
    filename: 'bundle.js',  // Название выходного файла
    path: path.resolve(__dirname, 'dist'),  // Путь к папке для сборки
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),  // Новый синтаксис вместо contentBase
    compress: true,  // Сжатие файлов для улучшения производительности
    port: 9000,  // Порт сервера
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // Поддержка CSS файлов
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),  // Очистка папки dist перед каждой сборкой
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Шаблон HTML
    }),
  ],
};
