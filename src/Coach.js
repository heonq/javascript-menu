import { Random } from '@woowacourse/mission-utils';
import MENUS from '../constants/Menus.js';

class Coach {
  #name;

  #menusCantEat;

  #recommendedMenu;

  constructor(name, menusCantEat, categories) {
    this.#name = name;
    this.#menusCantEat = menusCantEat;
    this.#recommendedMenu = [];
    this.recommendEveryday(categories);
  }

  recommendEveryday(categories) {
    this.#recommendedMenu = categories.map((category) => this.recommendEachDay(category));
  }

  recommendEachDay(category) {
    const randomMenu = this.getRandomMenu(category);
    if (this.#menusCantEat.includes(randomMenu) || this.#recommendedMenu.includes(randomMenu))
      return this.recommend();
    return randomMenu;
  }

  getRandomMenu(category) {
    const menus = MENUS[category];
    const shuffledIndex = Random.shuffle(
      Array.from({ length: menus.length }, (_, index) => index),
    )[0];
    return menus[shuffledIndex];
  }
}

export default Coach;
