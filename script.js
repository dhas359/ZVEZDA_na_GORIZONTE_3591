// Функция для переключения фона
function changeBackground(color) {
  document.body.style.background = color;
}

// Обработчики для кнопок
document.getElementById('darkButton').addEventListener('click', function () {
  changeBackground('linear-gradient(270deg, #2c2c2c, #1a1a1a)');
});

document.getElementById('lightButton').addEventListener('click', function () {
  changeBackground('linear-gradient(270deg, #ffcf6f, #e463d9)');
});
