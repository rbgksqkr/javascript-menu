class Coach {
  name = '';
  notEatMenus = [];
  eatMenus = [];
  recommendedMenus = [];

  constructor(name) {
    this.name = name;
  }

  addNotEatMenu(menu) {
    this.notEatMenus.push(menu);
  }

  addRecommendMenu(menu) {
    this.recommendedMenus.push(menu);
  }

  addEatMenu(menu) {
    this.eatMenus.push(menu);
  }

  checkValidRecommendMenu(menu) {
    if (this.notEatMenus.includes(menu)) {
      throw '[ERROR] 중복';
    }
  }
  printMenu() {
    return this.eatMenus.join(' | ');
  }
}

module.exports = Coach;
