const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../../utils/Constant');

const InputView = {
  readCoachNames(handleName) {
    MissionUtils.Console.readLine(MESSAGE.inputCoachName, handleName);
  },
  readMenuCantEat(coach, handleMenu) {
    MissionUtils.Console.readLine(coach.getName() + MESSAGE.inputMenuCantEat, handleMenu);
  },
};

module.exports = InputView;
