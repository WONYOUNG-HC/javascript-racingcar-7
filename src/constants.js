const INPUT_MESSAGE = Object.freeze({
  INPUT_CARS:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_COUNT: '시도할 횟수는 몇 회인가요?\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  RESULT: '실행 결과',
  WINNER: '최종 우승자 : ',
});

const DELEMETER = ',';

const RANDOM_NUMBER = Object.freeze({
  MIN: 0,
  MAX: 9,
  THRESHOLD: 4,
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, DELEMETER, RANDOM_NUMBER };
