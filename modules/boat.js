import { Location } from './location.js';

//Boat
export class Boat {
  constructor() {
    this.origin = null;
    this.destination = null;
    this.lastDock = null;
    this.currentDock = null;
    this.nextDock = null;
    this.statusTypes = ['departing', 'in transit', 'docking', 'docked'];
    this.status = 3;
    this.reverse = false;
    Object.preventExtensions();
  }

  update() {

  }

  depart() {
    //update origin and destination
    //update heading from 0 to
  }

  dock() {

  }
}
