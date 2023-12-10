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
    await this.generateCoaches(coachesArray);
  }

  async generateCoaches(coachesArray) {
    const menusCantEatArray = [];
    for (let i = 0; i < coachesArray.length; i += 1) {
      const menusCantEat = await this.readMenusCantEat(coachesArray[i]);
      menusCantEatArray.push(menusCantEat);
    }
    this.#menu = new Menu(coachesArray, menusCantEatArray);
  }

  async readMenusCantEat(coachName) {
    const menusCantEat = await InputView.readMenusCantEat(coachName);
    return this.handleMenusCantEat(menusCantEat, coachName);
  }

  async handleMenusCantEat(menusCantEat, coachName) {
    if (!Validator.validateMenusCantEat(menusCantEat)) return this.readMenusCantEat(coachName);
    OutputView.printLineBreak();
    return menusCantEat;
  }
}

export default MenuController;
