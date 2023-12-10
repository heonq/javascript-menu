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
  printResult(categories, coachInformations) {
    Console.print(MESSAGES.resultHeader);
    Console.print(MESSAGES.weekdays);
    this.printCategories(categories);
    coachInformations.forEach((coachInformation) => this.printCoach(coachInformation));
    this.printLineBreak();
    Console.print(MESSAGES.end);
  },

  printCategories(categories) {
    Console.print(this.formatPrint([MESSAGES.categoriesMessage, ...categories]));
  },

  printCoach(coachInformation) {
    Console.print(this.formatPrint(coachInformation));
  },

  formatPrint(print) {
    return MESSAGES.outputFormStart + print.join(MESSAGES.outputDelimiter) + MESSAGES.outputFormEnd;
  },
};

export default OutputView;
