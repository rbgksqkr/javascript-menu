const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView.js');
const OutputView = require('./OutputView.js');

const SAMPLE = {
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
};

const sampleCategory = { 1: '일식', 2: '한식', 3: '중식', 4: '아시안', 5: '양식' };

class App {
  async play() {
    OutputView.printStartRecommend();
    const result = await InputView.readCoach();
    for (let i = 0; i < result.length; i++) {
      await InputView.readCannotEat(result[i]);
    }

    const categoryNumber = MissionUtils.Random.pickNumberInRange(1, 5); // 카테고리를 랜덤으로 골라
    const stringMenu = SAMPLE[sampleCategory[categoryNumber]]; // 무작위 카테고리에 맞는 메뉴들의 string 받기
    const menus = stringMenu.split(',');
    console.log(`menus : ${menus}`);

    const menuNumber = MissionUtils.Random.shuffle(
      Array.from({ length: menus.length }, (v, i) => i + 1)
    )[0];
    // TODO: 추천할 수 없는 메뉴인 경우 다시 섞은 후 첫 번째 값을 사용해야 한다.
    // TODO: 추천할 수 없는 지 체크하는 메소드 구현

    console.log(`menu : ${menus[menuNumber]}`);

    OutputView.printRecommendResult();
  }
}

const app = new App();
app.play();

module.exports = App;
