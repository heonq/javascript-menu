const PREFIX = '[ERROR]';

const MESSAGE = Object.freeze({
  start: '점심 메뉴 추천을 시작합니다.\n',
  inputCoachName: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  inputMenuCantEat: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
  result: '메뉴 추천 결과입니다.\n',
  dayRow: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]\n',
  end: '추천을 완료했습니다.\n',
  category: ['일식', '한식', '중식', '아시안', '양식'],
});

const CONSTANTS = Object.freeze({
  startBraket: '[ ',
  endBraket: ' ]',
  OutputDivision: ' | ',
  linebreak: '\n',
  inputDivision: ',',
  minNameLength: 2,
  maxNameLength: 4,
  maxMenuCantEat: 2,
  minCoachCount: 2,
  maxCoachCount: 5,
});

const MENUS = Object.freeze({
  일식: '규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼',
  한식: '김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음',
  중식: '깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채',
  아시안: '팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜',
  양식: '라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니',
});

const totalMenus = Object.entries(MENUS)
  .map((menu) => menu[1].split(', ').join(','))
  .join(',')
  .split(',');

const ERROR_MESSAGE = Object.freeze({
  minNameLength: `${PREFIX}코치의 이름은 최소 2글자 이상 입력해야 합니다.`,
  maxNameLength: `${PREFIX}코치의 이름은 최대 4글자 이하로 입력해야 합니다.`,
  minCoachCount: `${PREFIX}코치는 최소 2명 이상 입력해야 합니다.`,
  maxCoachCount: `${PREFIX}코치는 최대 5명 이하로 입력해야 합니다.`,
  maxMenuCantEat: `${PREFIX}못 먹는 메뉴는 최대 2개 이하로 입력해야 합니다.`,
  notMenuInCategory: `${PREFIX}카테고리에 존재하는 메뉴를 입력해야 합니다.`,
});

module.exports = {
  MESSAGE,
  CONSTANTS,
  MENUS,
  ERROR_MESSAGE,
  totalMenus,
};
