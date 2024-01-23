// 문제16 : 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  // 문제 풀이 1
  // const backwards = line.split('').reverse().join('');

  // console.log(backwards);

  // 문제 풀이 2
  let backwardsSplitArray = line.split('');
  let reverString = '';

  for (let index = backwardsSplitArray.length - 1; index >= 0; index--) {
    reverString += backwardsSplitArray[index];
  }

  console.log(reverString);

  rl.close();
}).on('close', function () {
  process.exit();
});
