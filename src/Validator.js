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

  isValidNotEatMenuLength(length) {
    if (length > 2) {
      throw '[ERROR] 못먹는 음식은 최대 2개입니다.';
    }
  },

  isValidCoachNameLength(length) {
    if (length < 2 || length > 4) {
      throw '[ERROR] 코치의 이름은 최소 2글자, 최대 4글자입니다.';
    }
  },

  isValidCoachLength(length) {
    if (length < 2 || length > 5) {
      throw '[ERROR] 코치는 최소 2명, 최대 5명입니다.';
    }
  },
};

module.exports = Validator;
