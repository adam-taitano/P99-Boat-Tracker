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
  constructor(info) {
    if (info) {
      this.name = info.name;
      this.zone = info.zone;
      this.loc = info.loc;
      this.dockTime = info.dockTime;
      this.transitTime = info.transitTime;
    }
    next = null;
    prev = null;
    hasBoat = false;
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
export { Simulator, Boat, DockList, Dock, Countdown }
