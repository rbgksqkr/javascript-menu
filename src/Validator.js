const Validator = {
  isValidMenu(coach, selectedMenu) {
    if (coach.notEatMenus.includes(selectedMenu)) {
      throw '[ERROR] 못먹는 음식입니다. 다시 추천해주세요.';
    }
  },

  isRecommendedMenu(coach, selectedMenu) {
    if (coach.notEatMenus.includes(selectedMenu)) {
      throw '[ERROR] 못먹는 음식입니다. 다시 추천해주세요.';
    }
  },

  isValidCategory(categoryCount) {
    if (categoryCount >= 2) {
      throw '[ERROR] 한 주에 같은 카테고리는 최대 2회까지만 고를 수 있습니다.';
    }
  },
};

module.exports = Validator;
