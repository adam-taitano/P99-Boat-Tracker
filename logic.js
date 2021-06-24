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
    if (list) {
      list.forEach(dock => {this.append(dock)});
    }
  }

  append() {

  }

  pop() {

  }

  traverse() {

  }
}

//Port
class Dock {
  //provide dock object with the following constructor properties:
  constructor(name, zone, loc, dockTime, travelTime, next, prev, hasBoat) {
    Object.assign(this, { name, zone, loc, dockTime, travelTime, next, prev, hasBoat });
    if (!this.next) { this.next = null }
    if (!this.prev) { this.prev = null }
  }

  update(info) {
    console.log("updating dock");
    Object.assign(this, info);
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
