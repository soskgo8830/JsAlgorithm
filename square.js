// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const inputSplitArray = line.split(' ');
  const a = parseInt(inputSplitArray[0]);
  const b = parseInt(inputSplitArray[1]);

  // 문제 풀이 1
  // let result = 1;

  // for (let index = 1; index <= b; index++) {
  //   result *= a;
  // }

  // console.log(result);

  // 문제 풀이 2

  const result = Math.pow(a, b);

  console.log(result);

  rl.close();
}).on('close', function () {
  process.exit();
});
