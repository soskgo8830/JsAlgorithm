// 문제18 : 평균 점수
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 입출력

// 입력 : 20 30 40
// 출력 : 30

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const splitScoreArray = line.split(' ');
  let inputLength = splitScoreArray.length;
  let sum = 0;

  for (let index = 0; index < inputLength; index++) {
    sum += parseInt(splitScoreArray[index]); // parseInt 데이터 타입 변환하여 더하기
  }

  console.log(Math.floor(sum / inputLength)); // Math.floor 메서드는 소수점 자리를 모두 버림

  rl.close();
}).on('close', function () {
  process.exit();
});
