const MissionUtils = require('@woowacourse/mission-utils');
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
      const currentCategory = CONSTANTS.category[MissionUtils.Random.pickNumberInRange(1, 5) - 1];
      if (this.#category.filter((category) => category === currentCategory).length < 2) {
        this.#category.push(currentCategory);
      }
    }
  }

  shuffleMenu(category, coach) {
    const menus = MENUS[category].split(', ');
    const index = MissionUtils.Random.shuffle(menus)[0];
    const recommendMenu = menus[index - 1];
    return coach.checkMenu(recommendMenu);
  }

  getMenu(coach) {
    this.#category.forEach((category) => {
      if (!this.shuffleMenu(category, coach)) return this.shuffleMenu(category, coach);
    });
  }

  getMenuForCoaches() {
    this.#coaches.forEach((coach) => this.getMenu(coach));
  }

  getCategoryMessage() {
    this.#category.unshift(CONSTANTS.categroyStr);
    return (
      CONSTANTS.startBraket +
      this.#category.join(CONSTANTS.OutputDivision) +
      CONSTANTS.endBraket +
      CONSTANTS.linebreak +
      this.#coaches.map((coach) => coach.getRecommendationMessage()).join(CONSTANTS.linebreak)
    );
  }
}

module.exports = MenuRecommendation;
