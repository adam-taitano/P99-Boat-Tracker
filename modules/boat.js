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
    this.inReverse = false;
    Object.preventExtensions();
  }

  update(boatObj) {
    Object.assign(this, boatObj);
    if(this.currentDock) {
      this.nextDock = this.currentDock.next;
      this.prevDock = this.currentDock.prev;
    }
  }

  traverse() {
    if (!this.nextDock)
      return false;
    else {
      this.currentDock = null;
      return true;
    }
  }

  reverse() {
    if (!this.prevDock)
      return false;
    else {
      this.currentDock = null;
      return true;
    }
  }

  depart() {
    if (!this.inReverse)
      if (this.traverse()) { return true; }
      else {
        this.inReverse = true;
      }
    else {
      return false;
    }
  }

  dock() {

  }
}
