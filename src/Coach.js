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
}

module.exports = Coach;
