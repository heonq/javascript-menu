import InputView from './Views/InputViews.js';
import OutputView from './Views/OutputViews.js';
import Validator from '../Utils/Validator.js';
import Menu from './Menu.js';

class MenuController {
  #menu;

  async play() {
    OutputView.printIntro();
    await this.readCoaches();
  }

  async readCoaches() {
    const coachesArray = await InputView.readCoaches();
    this.handleCoaches(coachesArray);
  }

  async handleCoaches(coachesArray) {
    if (!Validator.validateCoaches(coachesArray)) return this.readCoaches();
    OutputView.printLineBreak();
    this.#menu = new Menu(coachesArray);
    this.readMenusCantEat(coachesArray);
  }

  async readMenusCantEat(coachesArray) {
    const menusCantEatArray = [];
    for (let i = 0; i < coachesArray.length; i += 1) {
      menusCantEatArray.push(await InputView.readMenusCantEat(coachesArray[i]));
      OutputView.printLineBreak();
    }
  }
}

export default MenuController;
