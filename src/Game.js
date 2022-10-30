// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require("./game-models/Boomerang");
const View = require("./View");
const runInteractiveConsole = require("./keyboard");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang(trackLength);
    this.hero = new Hero(this.boomerang); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy(trackLength);
    this.view = new View();
    this.hero.boomerang = this.boomerang;
    this.track = [];
    this.score = 0;
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    this.enemy.moveLeft();
    if (
      this.enemy.position === this.boomerang.position ||
      this.enemy.position === this.boomerang.position + 1 ||
      this.enemy.position === this.boomerang.position - 1
    ) {
      this.enemy.die();
      this.score += 1;
      this.boomerang.flag = false;
      this.boomerang.flyBack(this.hero.position); //Заменить на метод flyBack
      this.enemy = new Enemy(this.trackLength);
    }
  }

  play() {
    runInteractiveConsole(this.hero);
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 100);
  }
}

module.exports = Game;
