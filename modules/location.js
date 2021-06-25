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
    if (x.isNaN || y.isNaN) return false;
    else {
      let validx = false;
      let validy = false;
      if (this.xmin <= x && x <= this.xmax) validx = true;
      if (this.ymin <= y && y <= this.ymax) validy = true;
      return validx && validy;
    }
  }
}
