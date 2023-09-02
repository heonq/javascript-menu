const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../../utils/Constant');

const OutputView = {
  printIntro() {
    Console.print(MESSAGE.start);
  },
};

module.exports = OutputView;
