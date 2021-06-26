import { Boat } from './boat.js';
import { Countdown } from './Countdown.js';
import { DockList } from './DockList.js';

//Simulator
export class Simulator {
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
