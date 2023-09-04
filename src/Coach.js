const { CONSTANTS } = require('../utils/Constant');

class Coach {
  #name;

  #menuCantEat;

  #recommendedMenu;

  constructor(name) {
    this.#name = name;
    this.#menuCantEat = [];
    this.#recommendedMenu = [];
  }

  addMenuCantEat(menus) {
    this.#menuCantEat = [...menus.split(',')];
  }

  getMenuCantEat() {
    return this.#menuCantEat;
  }

  getName() {
    return this.#name;
  }

  addMenu(menu) {
    this.#recommendedMenu.push(menu);
  }

  checkMenu(menu) {
    if (this.#menuCantEat.includes(menu) || this.#recommendedMenu.includes(menu)) return false;
    this.addMenu(menu);
    return true;
  }

  getRecommendationMessage() {
    this.#recommendedMenu.unshift(this.#name);
    return (
      CONSTANTS.startBraket +
      this.#recommendedMenu.join(CONSTANTS.OutputDivision) +
      CONSTANTS.endBraket +
      CONSTANTS.linebreak
    );
  }
}

module.exports = Coach;
