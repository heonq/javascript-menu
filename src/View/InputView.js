const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../../utils/Constant');
const Validator = require('../../utils/Validator');

const InputView = {
  readCoachNames(handleName) {
    MissionUtils.Console.readLine(MESSAGE.inputCoachName, handleName);
  },
  readMenuCantEat(coach) {
    MissionUtils.Console.readLine(coach.getName() + MESSAGE.inputMenuCantEat, (menu) => {
      if (!Validator.validateMenuCantEat(menu)) {
        return this.readMenuCantEat(coach);
      }
      return coach.addMenuCantEat(menu);
    });
  },
};

module.exports = InputView;
