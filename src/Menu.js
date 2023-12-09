import { Random } from '@woowacourse/mission-utils';
import VALUES from '../constants/Values.js';
import MESSAGES from '../constants/Messages';

class Menu {
  #categories;

  constructor() {
    this.#categories = this.#pickCategories();
  }

  #pickCategories() {
    const categories = [];
    while (categories.length < VALUES.categoriesCount) {
      const menuIndex = Random.pickNumberInRange(VALUES.randomRangeStart, VALUES.randomRangeEnd);
      if (this.#checkCategoriesDuplicated(categories, menuIndex)) continue;
      categories.push(MESSAGES.categories[menuIndex]);
    }
    return categories;
  }

  #checkCategoriesDuplicated(categories, menuIndex) {
    return (
      categories.filter((category) => category === MESSAGES.categories[menuIndex]).length >=
      VALUES.maximumCategoriesRepeat
    );
  }
}

export default Menu;
