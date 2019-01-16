// Write a function to find the rectangular intersection of two given love rectangles.

// As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

// They are defined as objects ↴ like this:

//   const myRectangle = {

//   // Coordinates of bottom-left corner
//   leftX: 1,
//   bottomY: 1,

//   // Width and height
//   width: 6,
//   height: 3,
// };

// Your output rectangle should use this format as well.



function findRectangularOverlap(rect1, rect2) {
  let result = { leftX: 0, bottomY: 0, width: 0, height: 0 };

  if (rect1.leftX > rect2.leftX) {
    let temp = rect1;
    rect1 = rect2;
    rect2 = temp;
  }
  if (rect1.leftX + rect1.width <= rect2.leftX || rect1.bottomY + rect1.height <= rect2.bottomY) {
    return result;
  }
  result.leftX = rect2.leftX;
  result.bottomY = rect2.bottomY;
  result.width = (rect1.leftX + rect1.width < rect2.leftX + rect2.width ? rect1.leftX + rect1.width : rect2.leftX + rect2.width) - result.leftX;
  result.height = (rect1.bottomY + rect1.height <= rect2.bottomY + rect2.height ? rect1.bottomY + rect1.height : rect2.bottomY + rect2.height) - result.bottomY;
  return result;
}


















// Tests

let desc = 'overlap along both axes';
let rect1 = { leftX: 1, bottomY: 1, width: 6, height: 3 };
let rect2 = { leftX: 5, bottomY: 2, width: 3, height: 6 };
let actual = findRectangularOverlap(rect1, rect2);
let expected = { leftX: 5, bottomY: 2, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'one rectangle inside another';
rect1 = { leftX: 1, bottomY: 1, width: 6, height: 6 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 3, bottomY: 3, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'both rectangles the same';
rect1 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
rect2 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 2, bottomY: 2, width: 4, height: 4 };
assertObjectEquals(actual, expected, desc);

desc = 'touch on horizontal edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 2, bottomY: 6, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 0, bottomY: 0, width: 0, height: 0 };
assertObjectEquals(actual, expected, desc);

desc = 'touch on vertical edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 4, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 0, bottomY: 0, width: 0, height: 0 };
assertObjectEquals(actual, expected, desc);

desc = 'touch at a corner';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 0, bottomY: 0, width: 0, height: 0 };
assertObjectEquals(actual, expected, desc);

desc = 'no overlap';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 4, bottomY: 6, width: 3, height: 6 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 0, bottomY: 0, width: 0, height: 0 };
assertObjectEquals(actual, expected, desc);

function assertObjectEquals(a, b, desc) {
  const objectA = JSON.stringify(a);
  const objectB = JSON.stringify(b);
  if (objectA !== objectB) {
    console.log(`${desc} ... FAIL: ${objectA} != ${objectB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}