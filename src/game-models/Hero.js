// Наш герой.

class Hero {
  constructor(/* { position } */) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = 0;
  }

  moveLeft() {
    // Идём влево.
    if (this.position <= 1) {
      this.position = 0;
    } else {
      this.position -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    if (this.position < 30) {
      this.position += 1;
    }
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
