const OutputView = require('./View/OutputView');

class Controller {
  play() {
    OutputView.printIntro();
  }
}

module.exports = Controller;
