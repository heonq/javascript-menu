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
  }

  readCoachNames() {
    InputView.readCoachNames(this.handleNames.bind(this));
  }

  handleNames(names) {
    if (!Validator.validateCoachName(names)) this.readCoachNames();
  }
}

module.exports = Controller;
