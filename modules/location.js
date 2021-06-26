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
    Object.preventExtensions();
  }

  update(info) {
    Object.assign(this, info);
  }

  isMatch(loc) {
    if (loc.x.isNaN || loc.y.isNaN) return false;
    let validx = false;
    let validy = false;
    if (this.xmin <= loc.x && loc.x <= this.xmax) validx = true;
    if (this.ymin <= loc.y && loc.y <= this.ymax) validy = true;
    return validx && validy;
  }
}
