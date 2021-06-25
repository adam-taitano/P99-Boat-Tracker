//classes and functions go here

//Simulator
class Simulator {
  constructor(input) {
    this.boat = new Boat(input);
    this.input = input;
    this.countdown;
    this.projections = generateProjections(input);
    this.timeToport = generatePortCountdown(this.projections);
    this.timeToCity = generateCityCountdown(this.projections);
  }

  generateProjections(input) {

  }

  generatePortCountdown(input) {

  }

  generateCityCountdown(input) {

  }

  update() {

  }

  start() {

  }

  stop() {

  }

  pause() {

  }
}

//boat
class Boat {
  constructor(input) {
    this.origin;
    this.destination;
    this.loc = [input.xloc,input.yloc];
    this.status = ['departing', 'in transit', 'docking', 'docked'];
    this.heading = 0;
  }

  depart() {

  }

  dock() {

  }
}

//PortList
class DockList {
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

//Port
class Dock {
  //provide dock object, or use default properties:
  constructor(info = {}) {
    Object.assign(this, {
      name: null,
      zone: null,
      loc: new Location(),
      dockTime: null,
      travelTime: null,
      next: null,
      prev: null,
      hasBoat: false
    }, info);
  }

  update(info) {
    Object.assign(this, info);
  }
}

//Location
class Location {
  constructor() {
    this.x = null;
    this.y = null;
    this.xmin = null;
    this.ymin = null;
    this.xmax = null;
    this.xmin = null;
  }
}

//Countdown
class Countdown {
  constructor(deadline) {
    this.deadline = deadline;
    this.remaining = getTimeRemaining();
  }

  getTimeRemaining() {

  }

  initializeClock(id, deadline) {

  }

  updateClock() {

  }
}

//export classes
module.exports.Simulator = Simulator;
module.exports.Boat = Boat;
module.exports.DockList = DockList;
module.exports.Dock = Dock;
module.exports.Countdown = Countdown;
