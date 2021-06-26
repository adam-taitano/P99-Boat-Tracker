import { Location } from './location.js';

//Boat
export class Boat {
  constructor(input) {
    this.origin;
    this.destination;
    this.loc = new Location(input);
    this.status = ['departing', 'in transit', 'docking', 'docked'];
    this.heading = 0;
  }

  depart() {

  }

  dock() {

  }
}
