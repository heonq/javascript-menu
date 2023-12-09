import InputView from './Views/InputViews.js';

class MenuController {
  async play() {
    await this.readCoaches();
  }

  async readCoaches() {
    const coachesArray = await InputView.readCoaches();
  }
}

export default MenuController;
