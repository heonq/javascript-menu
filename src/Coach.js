class Coach {
  #name;

  #menuCantEat;

  constructor(name) {
    this.#name = name;
    this.#menuCantEat = [];
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
}

module.exports = Coach;
