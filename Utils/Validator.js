import handleError from './handleError.js';
import MESSAGES from '../constants/Messages.js';
import VALUES from '../constants/Values.js';
import MENUS from '../constants/Menus.js';

const Validator = {
  validateCoaches(coachesArray) {
    if (coachesArray.some((coach) => this.validateLength(coach)))
      return handleError(MESSAGES.invalidLength);
    if (this.validateDuplicated(coachesArray)) return handleError(MESSAGES.duplicated);
    if (this.validateCoachesCount(coachesArray)) return handleError(MESSAGES.invalidCoachCount);
    return true;
  },

  validateLength(coach) {
    return coach.length > VALUES.maximumNameLength || coach.length < VALUES.minimumNameLength;
  },
  validateDuplicated(coachesArray) {
    return new Set(coachesArray).size !== coachesArray.length;
  },
  validateCoachesCount(coachesArray) {
    return (
      coachesArray.length < VALUES.minimumCoachCount ||
      coachesArray.length > VALUES.maximumCoachCount
    );
  },
  validateMenusCantEat(menusCantEat) {
    if (this.validateMenuCount(menusCantEat)) return handleError(MESSAGES.invalidMenuCount);
    if (new Set(menusCantEat).size !== menusCantEat.length) return handleError(MESSAGES.duplicated);
    if (this.validateIncluded(menusCantEat)) return handleError(MESSAGES.invalidMenu);
    return true;
  },

  validateMenuCount(menusCantEat) {
    return (
      menusCantEat.length < VALUES.minimumMenuCount || menusCantEat.length > VALUES.maximumMenuCount
    );
  },
  validateIncluded(menusCantEat) {
    const totalMenus = Object.values(MENUS).join('').split(MESSAGES.nameDelimiter);
    return !menusCantEat.every((menuCantEat) => totalMenus.includes(menuCantEat));
  },
};

export default Validator;
