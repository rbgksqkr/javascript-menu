const MissionUtils = require('@woowacourse/mission-utils');

const InputView = {
  async readCoach() {
    const data = await MissionUtils.Console.readLineAsync(
      '코치의 이름을 입력해 주세요. (, 로 구분)\n'
    );

    const coaches = data.split(',');
    console.log(coaches);
    return coaches;
  },

  async readCannotEat(coach) {
    const data = await MissionUtils.Console.readLineAsync(
      `${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`
    );
    const notEatMenus = data.split(',');
    console.log(notEatMenus);
  },
};

module.exports = InputView;
