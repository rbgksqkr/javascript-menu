const MissionUtils = require('@woowacourse/mission-utils');
const Coach = require('./Coach.js');
const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');
const Validator = require('./Validator.js');

const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

const sampleCategory = { 1: '일식', 2: '한식', 3: '중식', 4: '아시안', 5: '양식' };
const WEEKDAY = 5;

class App {
  async play() {
    OutputView.printStartRecommend();
    const coachList = await InputView.readCoach();
    const coaches = await this.getCoaches(coachList);
    const selectedCategory = this.getSelectedCategory(coaches);
    OutputView.printRecommendResult(coaches, selectedCategory);
  }

  async getCoaches(coachList) {
    const coaches = [];
    for (let i = 0; i < coachList.length; i++) {
      const coach = new Coach(coachList[i]);
      const notEatMenus = await InputView.readCannotEat(coachList[i]);
      notEatMenus.forEach((menu) => {
        coach.addNotEatMenu(menu);
      });
      coaches.push(coach);
    }
    return coaches;
  }

  getSelectedCategory(coaches) {
    const selectedCategory = [];
    for (let i = 0; i < WEEKDAY; i++) {
      const category = this.getRandomCategory(selectedCategory);
      selectedCategory.push(sampleCategory[category]);
      for (let j = 0; j < coaches.length; j++) {
        const menu = this.recommendMenu(coaches[j], category);
        coaches[j].addEatMenu(menu);
      }
    }
    return selectedCategory;
  }

  getRandomCategory(selectedCategory) {
    try {
      const category = MissionUtils.Random.pickNumberInRange(1, 5); // 카테고리를 랜덤으로 골라
      const categoryCount = selectedCategory.filter(
        (selected) => this.getCategoryName(category) === selected
      ).length;
      Validator.isValidCategory(categoryCount);
      return category;
    } catch (error) {
      MissionUtils.Console.print(error);
      return this.getRandomCategory(selectedCategory);
    }
  }

  getCategoryName(categoryNumber) {
    return sampleCategory[categoryNumber];
  }

  getCategoryMenu(categoryNumber) {
    return SAMPLE[this.getCategoryName(categoryNumber)];
  }

  recommendMenu(coach, categoryNumber) {
    try {
      const stringMenu = this.getCategoryMenu(categoryNumber); // 무작위 카테고리에 맞는 메뉴들의 string 받기
      const menus = stringMenu.split(',').map((menu) => menu.trim());
      const menuNumber = MissionUtils.Random.shuffle(
        Array.from({ length: menus.length }, (v, i) => i)
      )[0];
      const selectedMenu = menus[menuNumber];
      Validator.isValidMenu(coach, selectedMenu);
      Validator.isRecommendedMenu(coach, selectedMenu);
      return selectedMenu;
    } catch (error) {
      MissionUtils.Console.print(error);
      return this.recommendMenu(coach, categoryNumber);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
