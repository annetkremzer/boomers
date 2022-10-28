// Сделаем отдельный класс для отображения игры в консоли.
const readlineSync = require('readline-sync');

class View {
  render(track) {
    // const yourTeamName = readlineSync.question('Enter your name: ');

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    // console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
