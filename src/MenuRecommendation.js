const { Random } = require('@woowacourse/mission-utils');
const Coach = require('./Coach');
const { CONSTANTS } = require('../utils/Constant');

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
      const currentCategory = CONSTANTS.menus[Random.pickNumberInRange(1, 5) - 1];
      if (this.#category.filter((category) => category === currentCategory).length < 2) {
        this.#category.push(currentCategory);
      }
    }
  }

  printMenusCantEat() {
    return this.#coaches.map((coach) => coach.getMenuCantEat());
  }
}

module.exports = MenuRecommendation;
