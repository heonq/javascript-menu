import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/Messages.js';

const InputView = {
  async readCoaches() {
    const coaches = await Console.readLineAsync(MESSAGES.coachNameQuery);
    return coaches.split(MESSAGES.nameDelimiter);
  },
};

export default InputView;
