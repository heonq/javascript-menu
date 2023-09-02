const OutputView = require('../src/View/OutputView');

const handleError = (error) => {
  try {
    throw new Error(error);
  } catch {
    OutputView.printMessage(error);
    return false;
  }
};

module.exports = handleError;
