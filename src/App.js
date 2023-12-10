import MenuController from './MenuController.js';

class App {
  async play() {
    await new MenuController().play();
  }
}

const app = new App();
app.play();

export default App;
