const { Random } = require('@woowacourse/mission-utils');
const Coach = require('./Coach');
const { CONSTANTS, MENUS } = require('../utils/Constant');

class MenuRecommendation {
  #coaches;

  #category;

  constructor() {
    this.#coaches = [];
    this.#category = [];
  }

  generateCoaches(names) {
    names.split(',').forEach((coachName) => this.#coaches.push(new Coach(coachName)));
  }

  getCoaches() {
    return this.#coaches;
  }

  getCoachesCount() {
    return this.#coaches.length;
  }

  getRandomCategory() {
    while (this.#category.length < 5) {
      const currentCategory = CONSTANTS.category[Random.pickNumberInRange(1, 5) - 1];
      if (this.#category.filter((category) => category === currentCategory).length < 2) {
        this.#category.push(currentCategory);
      }
    }
  }

  shuffleMenu(menu) {
    return Random.shuffle(menu)[0];
  }

  getMenu(coach) {
    this.#category.forEach((category) => {
      const menu = this.shuffleMenu(MENUS[category].split(', '));
      if (!coach.checkMenu(menu)) this.getMenu(coach);
    });
  }

  getMenuForCoaches() {
    this.#coaches.forEach((coach) => this.getMenu(coach));
  }
}

module.exports = MenuRecommendation;
