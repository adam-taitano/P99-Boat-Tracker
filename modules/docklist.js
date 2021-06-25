import { Dock } from './dock.js';
import { Location } from './location.js';
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
    if (this.count === 0) {
      console.log("There are no docks to search.");
      return null;
    }
    //parse x and y locs
    let x = locObj.x;
    let y = locObj.y;
    //traverse list until match or at tail
    current = this.head;
    found = null;
    while (current.next != null) {
      //compare to each dock's x and y ranges
      if (current.loc.xmin < x < current.loc.xmax && current.loc.ymin < y < current.loc.ymax) {
        found = current;
        break;
      }
      current = current.next;
    }
    return found;
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
