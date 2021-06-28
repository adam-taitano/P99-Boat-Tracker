import { Location } from './location.js';

//Boat
export class Boat {
  constructor() {
    this.origin = null;
    this.destination = null;
    this.prevDock = null;
    this.currentDock = null;
    this.nextDock = null;
    this.statusTypes = ['departing', 'in transit', 'docking', 'docked'];
    this.status = 3;
    this.reverse = false;
    Object.preventExtensions();
  }

  update(boatObj) {
    Object.assign(this, boatObj);
  }

  depart() {
    return false;
  }

  dock() {

  }
}
