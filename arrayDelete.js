// 문제1 : 배열의 삭제 400,500을 제거

// 풀이 1. pop매소드로 배열 마지막 값 제거
const nums1 = [100, 200, 300, 400, 500];

nums1.pop();
nums1.pop();
console.log(nums1);

// 풀이 2. splice매소드로 특정 인덱스 값 제거
const nums2 = [100, 200, 300, 400, 500];
const spliceResult = nums2.splice(0, 3);
console.log(spliceResult);

// 풀이 3. splice매소드로 특정 값 제거
const nums3 = [100, 200, 300, 400, 500];
for (let index = nums3.length - 1; index >= 0; index--) {
  if (nums3[index] === 400 || nums3[index] === 500) {
    nums3.splice(index, 1);
  }
}
console.log(nums3);

// 풀이 4 - filter매소드를 사용하여 제거
const nums4 = [100, 200, 300, 400, 500];
const filterResult = nums4.filter(
  (value, index, array) => value !== 400 && value !== 500
);

console.log(filterResult);
