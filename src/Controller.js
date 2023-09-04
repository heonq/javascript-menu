const OutputView = require('./View/OutputView');
const InputView = require('./View/InputView');
const Validator = require('../utils/Validator');
const MenuRecommendation = require('./MenuRecommendation');

class Controller {
  #menuRecommendation;

  constructor() {
    this.#menuRecommendation = new MenuRecommendation();
  }

  play() {
    OutputView.printIntro();
    this.readCoachNames();
    this.readMenuCantEat();
    this.getRecommendation();
  }

  readCoachNames() {
    InputView.readCoachNames(this.handleNames.bind(this));
  }

  handleNames(names) {
    if (!Validator.validateCoachName(names)) this.readCoachNames();
    this.#menuRecommendation.generateCoaches(names);
  }

  readMenuCantEat() {
    const coaches = this.#menuRecommendation.getCoaches();
    coaches.forEach((coach) => InputView.readMenuCantEat(coach));
  }

  getRecommendation() {
    this.#menuRecommendation.getRandomCategory();
    this.#menuRecommendation.getMenuForCoaches();
    OutputView.printResult(this.#menuRecommendation);
  }
}

module.exports = Controller;
