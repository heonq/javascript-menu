const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../../utils/Constant');

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
  printIntro() {
    Console.print(MESSAGE.start);
  },
  printResult(menuRecommendation) {
    this.printMessage(MESSAGE.result + MESSAGE.dayRow);
    this.printMessage(menuRecommendation.getCategoryMessage());
    this.printMessage(MESSAGE.end);
  },
};

module.exports = OutputView;
