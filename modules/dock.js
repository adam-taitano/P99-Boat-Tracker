export class Dock {
  //provide dock object, or use default properties:
  constructor(info = {}) {
    Object.assign(this, {
      name: null,
      zone: null,
      loc: new Location(),
      dockTime: null,
      travelTime: null,
      next: null,
      prev: null,
      hasBoat: false
    }, info);
  }

  update(info) {
    Object.assign(this, info);
  }
}
