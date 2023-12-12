class Coach {
  name;
  notEatMenus = [];
  eatMenus = [];

  constructor(name) {
    this.#name = name;
  }

  addNotEatMenu(menu) {
    this.notEatMenus.push(menu);
  }

  addEatMenu(menu) {
    this.eatMenus.push(menu);
  }

  printMenu() {
    return this.eatMenus.join(' | ');
  }
}

module.exports = Coach;
