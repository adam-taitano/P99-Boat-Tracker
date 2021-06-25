
//boat
export class Boat {
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
