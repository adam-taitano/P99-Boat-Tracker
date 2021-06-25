

//Location
export class Location {
  constructor(info = {}) {
    Object.assign(this, {
      x: null,
      xmin: null,
      xmax: null,
      y: null,
      ymin: null,
      ymax: null
    }, info);
  }

  update(info) {
    Object.assign(this, info);
  }

  isMatch(x, y) {

  }
}
