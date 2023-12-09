import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/Messages.js';

const OutputView = {
  printLineBreak() {
    Console.print(MESSAGES.lineBreak);
  },
  printError(error) {
    Console.print(error);
  },

  printIntro() {
    Console.print(MESSAGES.intro);
    this.printLineBreak();
  },
};

export default OutputView;
