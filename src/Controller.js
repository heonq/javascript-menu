const OutputView = require('./View/OutputView');
const InputView = require('./View/InputView');
const Validator = require('../utils/Vaiidator');

class Controller {
  play() {
    OutputView.printIntro();
    this.readCoachNames();
  }

  readCoachNames() {
    InputView.readCoachNames(this.handleNames.bind(this));
  }

  handleNames(names) {
    if (!Validator.validateCoachName(names));
  }
}

module.exports = Controller;
