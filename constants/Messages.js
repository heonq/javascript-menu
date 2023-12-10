const PREFIX = '[ERROR]';

const MESSAGES = Object.freeze({
  intro: '점심 메뉴 추천을 시작합니다.',
  coachNameQuery: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  menusCantEatQuery: '(이)가 못 먹는 메뉴를 입력해주세요.\n',
  nameDelimiter: ',',
  resultHeader: '메뉴 추천 결과입니다.',
  weekdays: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  categoriesMessage: '카테고리',
  categories: ['카테고리', '일식', '한식', '중식', '아시안', '양식'],
  outputFormStart: '[ ',
  outputFormEnd: ' ]',
  outputDelimiter: ' | ',
  end: '추천을 완료했습니다.',
  lineBreak: '',
  invalidLength: `${PREFIX} 코치 이름은 2글자 이상 4글자 이하로 입력해 주세요.`,
  duplicated: `${PREFIX} 중복된 이름은 입력할 수 없습니다.`,
  invalidCoachCount: `${PREFIX} 코치는 2명 이상 5명 이하로 입력해 주세요.`,
  invalidMenuCount: `${PREFIX} 못 먹는 메뉴는 0개 이상 2개 이하로 입력해 주세요.`,
  invalidMenu: `${PREFIX} 메뉴 목록에 존재하는 메뉴를 입력해 주세요.`,
});

export default MESSAGES;
