/*
input :  arr = [1,1,0,-1,-1]
length = 5 => length
p = 2 => two positive numbers (số dương)
n = 2 => two negative numbers (số âm)
z = 1 => zero number
output => 2/5 = 0.4  & 2/5 = 0.4 & 1/5 = 0.2
*/
const plusMinus = (arr) => {
  const length = arr.length;
  let numberP = 0;
  let numberN = 0;
  let number0 = 0;

  for (let i = 0; i < length; i++) {
    if (arr[i] > 0) {
      numberP++;
    } else if (arr[i] < 0) {
      numberN++;
    } else if (arr[i] === 0) {
      number0++;
    }
  }
  //   console.log("p", numberP / length);
  //   console.log("n", numberN / length);
  //   console.log("0", number0 / length);
};

plusMinus([1, 1, 0, -1, -1]);

/**
 * input: arr = [1,3,5,7,9]
 * output: minimum sum = 1+3+5+7 =16
 *         maximum sum = 3+5+7+9 =24
 */

const minMaxSum = (arr) => {
  const length = arr.length;
  const newArr = arr.sort();
  const max = newArr.slice(1, length).reduce((a, b) => a + b, 0);
  const min = newArr
    .reverse()
    .slice(1, length)
    .reduce((a, b) => a + b, 0);
  return [min, max];
};
minMaxSum([1, 3, 5, 7, 9]);

/**
 *  input : arr = [1,3,2,6,1,2]
 *          k = 3 (integer number : số nguyên)
 *          n  = 6 (length arr)
 *  output : 5
 *          1+2 =3 , 1+2=3 , 3+6=9 , 2+1=3 , 1+2=3
 *
 */

const divisibleSumParis = (k, arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % k === 0) {
        result++;
      }
    }
  }
  return result;
};

divisibleSumParis(3, [1, 3, 2, 6, 1, 2]);

/**
 * input : strings = ['ab', 'ab','abc']
 *          queries = ['ab','abc','bc']
 * 'ab' = 'ab' => 1
 * 'ab' = 'ab' => 2
 * 'abc' = 'abc' => 1
 * 'bc' => 0
 * output : results = [2,1,0]
 */

const matchingString = (strings, queries) => {
  let result = [];
  queries.map((q) => {
    let count = 0;
    strings.map((s) => {
      if (s === q) {
        count++;
      }
    });
    result.push(count);
  });

  return result;
};

matchingString(["ab", "ab", "abc"], ["ab", "abc", "bc"]);

/**
 * input : arr = ([0, 1, 2, 4, 6, 5, 3])
 * output : find median
 *          3
 * median : nếu lẻ là số ở giữa
 *          nếu chẳn là trung bình cộng của hai phần tử ở giữa
 *
 *
 */

const findMedian = (arr) => {
  arr.sort();
  const middleIndex = Math.floor(arr.length / 2);
  let median;
  if (arr.length % 2 !== 0) {
    median = arr[middleIndex];
  } else {
    median = (arr[middleIndex - 1] + arr[middleIndex]) / 2;
  }

  return median;
};

findMedian([0, 1, 2, 4, 6, 5, 3]);
