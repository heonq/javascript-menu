const handleError = require('./handleError');
const { ERROR_MESSAGE, CONSTANTS, totalMenus } = require('./Constant');

const Validator = {
  validateCoachName(names) {
    if (names.split(',').some((name) => name.length < CONSTANTS.minNameLength)) {
      return handleError(ERROR_MESSAGE.minNameLength);
    }
    if (names.split(',').some((name) => name.length > CONSTANTS.maxNameLength)) {
      return handleError(ERROR_MESSAGE.maxNameLength);
    }
    return true;
  },
  validateCoachCounter(names) {
    if (names.split(',').length > CONSTANTS.maxCoachCount) {
      return handleError(ERROR_MESSAGE.maxCoachCount);
    }
    if (names.split(',').length < CONSTANTS.minCoachCount) {
      return handleError(ERROR_MESSAGE.minCoachCount);
    }
    return true;
  },
  validateMenuCantEat(menus) {
    if (menus === '') return true;
    if (menus.split(',').length > CONSTANTS.maxMenuCantEat) {
      return handleError(ERROR_MESSAGE.maxMenuCantEat);
    }
    if (!menus.split(',').every((menu) => totalMenus.includes(menu))) {
      return handleError(ERROR_MESSAGE.notMenuInCategory);
    }
    return true;
  },
};

module.exports = Validator;
