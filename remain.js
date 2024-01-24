// 문제20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력

// 입력 : 10 2
// 출력 : 5 0

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const inputSplitArray = line.split(' ');
  const a = parseInt(inputSplitArray[0]);
  const b = parseInt(inputSplitArray[1]);

  const output1 = Math.floor(a / b);
  const output2 = a % b;

  console.log(output1, output2);

  rl.close();
}).on('close', function () {
  process.exit();
});
