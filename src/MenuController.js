import InputView from './Views/InputViews.js';
import OutputView from './Views/OutputViews.js';

class MenuController {
  async play() {
    OutputView.printIntro();
    await this.readCoaches();
  }

  async readCoaches() {
    const coachesArray = await InputView.readCoaches();
  }
}

export default MenuController;
