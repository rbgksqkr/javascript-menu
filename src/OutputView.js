const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = {
  async printStartRecommend() {
    MissionUtils.Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  async printRecommendResult() {
    MissionUtils.Console.print('메뉴 추천 결과입니다.');
    MissionUtils.Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
    MissionUtils.Console.print('[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]');
    MissionUtils.Console.print('[ 토미 | 쌈밥 | 김치찌개 | 미소시루 | 짜장면 | 팟타이 ]');
    MissionUtils.Console.print(
      '[ 제임스 | 된장찌개 | 비빔밥 | 가츠동 | 토마토 달걀볶음 | 파인애플 볶음밥 ]'
    );
    MissionUtils.Console.print('[ 포코 | 된장찌개 | 불고기 | 하이라이스 | 탕수육 | 나시고렝 ]\n');
    MissionUtils.Console.print('추천을 완료했습니다.');
  },
};

module.exports = OutputView;
