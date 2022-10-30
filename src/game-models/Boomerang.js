// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

const Hero = require('./Hero');

class Boomerang {
  constructor() {
    this.skin = '🍻';
    this.position = 1;
    this.flag = true;
  }

  fly() {
    this.flag = true;
    const timer = setInterval(() => {
      this.moveRight();
      if (this.flag === false) {
        clearInterval(timer);
      }
    }, 100);
  }

  flyBack(position) {
    const anyTimer = setInterval(() => {
      this.moveLeft();
      if (this.position == position + 1) {
        clearInterval(anyTimer);
      }
    }, 100);
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}
// Спасибо, Илья

module.exports = Boomerang;