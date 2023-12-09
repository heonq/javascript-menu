import handleError from './handleError.js';
import MESSAGES from '../constants/Messages.js';
import VALUES from '../constants/Values.js';

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
};

export default Validator;
