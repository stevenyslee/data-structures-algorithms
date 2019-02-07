class LinkedHashMap {
  constructor(maxItems = 3) {
    this.storage = {};
    this.head = null;
    this.tail = null;
    this.count = 0;
    this.maxItems = maxItems;
  }

  insert(key, value) {
    // Create node
    const node = {
      key,
      value, 
      next: null, 
      prev: null
    };

    this.count++;

    if (this.count > this.maxItems) {
      this.remove();
    }

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
      this.storage[key] = node;
      return key;
    }
    

    if (this.storage[key] === this.head) {
      // Check if inserting key before head, set new head
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
      this.storage[key] = node;
    } else if (this.storage[key]) {
      // Check if key exists, if so, insert new node before key
      let nextNode = this.storage[key];
      let prevNode = nextNode.prev;
      node.next = nextNode;
      node.prev = prevNode;
      nextNode.prev = node;
      prevNode.next = node;
      this.storage[key] = node;
    } else {
      // If key does not exist, insert node at the tail
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.storage[key] = node;
    }
    return key;

  }

  remove(key = this.tail.key) {
    // key does not exist, nothing to delete
    if (!this.storage[key]) {
      return null;
    }
    this.count--;
    // Delete if key is head
    if (this.storage[key] === this.head) {
      let deletedNode = this.head;
      this.head = deletedNode.next;
      this.head.prev = null;
      delete this.storage[key];
      return deletedNode;
    } else if (this.storage[key] === this.tail) {
      // Delete if key is tail
      let deletedNode = this.tail;
      this.tail = deletedNode.prev;
      this.tail.next = null;
      delete this.storage[key];
      return deletedNode;
    } else {
      // Delete if key is body
      let deletedNode = this.storage[key];
      let prevNode = deletedNode.prev;
      let nextNode = deletedNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      delete this.storage[key];
      return deletedNode;
    }
  }
}

let lhm = new LinkedHashMap();
console.log(lhm.insert('a', 1));
console.log(lhm.insert('b', 2));
console.log(lhm.insert('c', 3));
console.log(lhm.insert('d', 4));
console.log(lhm.insert('e', 5));
console.log(lhm.remove());
console.log(lhm.remove('a'));
console.log(lhm.storage);
