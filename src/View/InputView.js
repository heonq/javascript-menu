const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../../utils/Constant');

const InputView = {
  readCoachNames(handleName) {
    MissionUtils.Console.readLine(MESSAGE.inputCoachName, handleName);
  },
};

module.exports = InputView;
