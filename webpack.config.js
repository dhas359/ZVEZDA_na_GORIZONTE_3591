const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',  // Явно указываем режим (development или production)
  entry: './src/index.js',  // Точка входа
  output: {
    filename: 'bundle.js',  // Название выходного файла
    path: path.resolve(__dirname, 'dist'),  // Путь к папке, где будет создан бандл
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),  // Папка с скомпилированными файлами
    compress: true,  // Сжатие файлов для улучшенной производительности
    port: 9000,  // Порт сервера
  },
  module: {
    rules: [
      {
        test: /\.mp4$/,  // Проверяем все файлы с расширением .mp4
        use: [
          {
            loader: 'file-loader',  // Используем file-loader для обработки видео
            options: {
              name: '[name].[hash].[ext]',  // Генерация имени файла с хешем
            },
          },
        ],
      },
      {
        test: /\.css$/,  // Проверяем все файлы с расширением .css
        use: ['style-loader', 'css-loader'],  // Подключаем лоадеры для работы с CSS
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),  // Очистка папки dist перед сборкой
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Шаблон для HTML
    }),
  ],
};
