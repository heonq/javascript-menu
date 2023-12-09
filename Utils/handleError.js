import OutputView from '../src/Views/OutputViews.js';

const handleError = (error) => {
  try {
    throw new Error(error);
  } catch {
    OutputView.printError(error);
    return false;
  }
};

export default handleError;
