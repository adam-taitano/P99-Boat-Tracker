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
    if (!this.currentDock.next) {
      this.reverse = true;
      this.prevDock = this.currentDock;
      this.prevDock.hasBoat = false;
      this.nextDock = this.currentDock.prev;
      while (this.currentDock.prev) {
        this.currentDock = this.currentDock.prev;
      }
      this.destination = this.currentDock;
      this.currentDock = null;
    }
    else {

    }
  }

  dock() {

  }
}
