const MissionUtils = require('@woowacourse/mission-utils');

const InputView = {
  async readCoach() {
    try {
      const data = await MissionUtils.Console.readLineAsync(
        '코치의 이름을 입력해 주세요. (, 로 구분)\n'
      );

      const coaches = data.split(',').map((coach) => {
        if (coach.length < 2 || coach.length > 4) {
          throw '[ERROR] 코치의 이름은 최소 2글자, 최대 4글자입니다.';
        }
        return coach;
      });
      return coaches;
    } catch (error) {
      MissionUtils.Console.print(error);
      return this.readCoach();
    }
  },

  async readCannotEat(coach) {
    const data = await MissionUtils.Console.readLineAsync(
      `\n${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`
    );
    const notEatMenus = data.split(',');
    return notEatMenus;
  },
};

module.exports = InputView;
