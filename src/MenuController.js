import InputView from './Views/InputViews.js';
import OutputView from './Views/OutputViews.js';
import Validator from '../Utils/Validator.js';
import Menu from './Menu.js';

class MenuController {
  #menu;

  constructor() {
    this.#menu = new Menu();
  }

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
  }
}

export default MenuController;
