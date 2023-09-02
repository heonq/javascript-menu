const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../../utils/Constant');

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
  printIntro() {
    Console.print(MESSAGE.start);
  },
};

module.exports = OutputView;
