const MissionUtils = require('@woowacourse/mission-utils');
const Validator = require('./Validator');

const InputView = {
  async readCoach() {
    try {
      const data = await MissionUtils.Console.readLineAsync(
        '코치의 이름을 입력해 주세요. (, 로 구분)\n'
      );
      const coaches = data.split(',').map((coach) => {
        Validator.isValidCoachNameLength(coach.length);
        return coach;
      });
      Validator.isValidCoachLength(coaches.length);
      return coaches;
    } catch (error) {
      MissionUtils.Console.print(error);
      return this.readCoach();
    }
  },

  async readCannotEat(coach) {
    try {
      const data = await MissionUtils.Console.readLineAsync(
        `\n${coach}(이)가 못 먹는 메뉴를 입력해 주세요.\n`
      );
      const notEatMenus = data.split(',');
      Validator.isValidNotEatMenuLength(notEatMenus.length);
      return notEatMenus;
    } catch (error) {
      MissionUtils.Console.print(error);
      return this.readCannotEat(coach);
    }
  },
};

module.exports = InputView;
