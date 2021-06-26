import { Dock } from './dock.js';

//PortList
export class DockList {
  constructor(list) {
    this.head = null;
    this.tail = null;
    this.count = 0;
    if (list) {
      list.forEach(dock => {
        this.append(dock);
        ++this.count;
      });
    }
  }

  append(dock) {
    if (!this.head && !this.tail) {
      this.head = this.tail = dock;
    }
    else if (this.head === this.tail){
      this.tail.next = dock;
      dock.prev = this.tail;
      this.tail = dock;
    }
    else {
      this.tail.next = dock;
      dock.prev = this.tail;
      this.tail = dock;
    }
    ++this.count;
  }

  pop() {
    if (!this.head && !this.tail) {
      console.log("DockList is already empty");
    }
    else if (this.head === this.tail) {
      this.head = this.tail = null;
    }
    else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    --this.count;
  }

  findByLoc(locObj) {
    //check if empty
    if (!this.head) {
      return null;
    }
    //traverse list until match or at tail
    let current = this.head;
    while (current) {
      if (current.loc.isMatch(locObj)) {
        break;
      }
      current = current.next;
    }
    return current;
  }

  findByName(head, name) {
    if (!head) return null;
    else if (head.name === name) {
      return head;
    }
    else {
      return this.findByName(head.next, name);
    }
  }
}
