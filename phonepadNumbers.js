const phonepadNumbers = (start, length) => {
  let phonepad = {
    1: [2, 4],
    2: [1, 3, 5],
    3: [2, 6],
    4: [1, 5, 7],
    5: [2, 4, 6, 8],
    6: [3, 5, 9],
    7: [4, 8],
    8: [5, 7, 9, 0],
    9: [6, 8],
    0: [8]
  }
  let result = new Set();
  const helper = (currentPosition, currentPath, movesRemaining) => {
    if (!movesRemaining) {
      result.add(Number(currentPath));
      return;
    }
    for (let i = 0; i < phonepad[currentPosition].length; i++) {
      helper(phonepad[currentPosition][i], currentPath + phonepad[currentPosition][i], movesRemaining - 1);
    }
  }
  helper(start, start.toString(), length - 1);
  return Array.from(result);
}

// Tests
const assert = (condition, desc) => {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}

const isSetsEqual = (as, bs) => {
  if (as.size !== bs.size) {
    return false;
  }
  for (let a of as) {
    if (!bs.has(a)) return false;
  }
  return true;
}

let desc = 'start at 5 with length 1';
let input = [5, 1];
let actual = new Set(phonepadNumbers(...input));
let expected = new Set([5]);
assert(isSetsEqual(actual, expected), desc);

desc = 'start at 1 with length 3';
input = [1, 3];
actual = new Set(phonepadNumbers(...input));
expected = new Set([121, 123, 125, 141, 145, 147]);
assert(isSetsEqual(actual, expected), desc);

desc = 'start at 0 with length 4';
input = [0, 4];
actual = new Set(phonepadNumbers(...input));
expected = new Set([0808, 0852, 0854, 0856, 0858, 0874, 0878, 0896, 0898]);
assert(isSetsEqual(actual, expected), desc);

desc = 'start at 5 with length 4';
input = [5, 4];
actual = new Set(phonepadNumbers(...input));
expected = new Set([5212, 5214, 5232, 5236, 5252, 5254, 5256, 5258, 5412, 5414, 5452, 5454, 5456, 5458, 5474, 5478, 5632, 5636, 5652, 5654, 5656, 5658, 5696, 5698, 5852, 5854, 5856, 5858, 5874, 5878, 5896, 5898, 5808 ]);
assert(isSetsEqual(actual, expected), desc);



