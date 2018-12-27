// You want to be able to access the largest element in a stack. ↴
// Use your Stack class to implement a new class MaxStack with a method getMax() that returns the largest element in the stack. getMax() should not remove the item.


// Implement the push, pop, and getMax methods

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxStack = new Stack();
  }

  push(item) {
    this.stack.push(item);
    if (this.maxStack.peek() === null || item >= this.maxStack.peek()) {
      this.maxStack.push(item);
    }
  }

  pop() {
    let item = this.stack.pop();
    if (item === this.maxStack.peek()) {
      this.maxStack.pop();
    }
    return item;
  }

  getMax() {
    return this.maxStack.peek();
  }
}

class Stack {
  constructor() {

    // Initialize an empty array
    this.items = [];
  }

  // Push a new item to the last index
  push(item) {
    this.items.push(item);
  }

  // Remove the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // See what the last item is
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}


















// Tests

const s = new MaxStack();
s.push(5);

assertEquals(5, s.getMax(), 'check max after 1st push');

s.push(4);
s.push(7);
s.push(7);
s.push(8);

assertEquals(8, s.getMax(), 'check before 1st pop');
assertEquals(8, s.pop(), 'check pop #1');
assertEquals(7, s.getMax(), 'check max after 1st pop');
assertEquals(7, s.pop(), 'check pop #2');
assertEquals(7, s.getMax(), 'check max after 2nd pop');
assertEquals(7, s.pop(), 'check pop #3');
assertEquals(5, s.getMax(), 'check max after 3rd pop');
assertEquals(4, s.pop(), 'check pop #4');
assertEquals(5, s.getMax(), 'check max after 4th pop');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}