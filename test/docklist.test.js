import { Dock, DockList, Location } from "../logic.js";
// import { DockList } from "../logic.js";
// import { Location } from "../logic.js";
import { strict as assert } from 'assert';

describe('DockList', function() {
  beforeEach(function() {
    this.list = new DockList();
    this.first = new Dock({name: 'first'});
    this.second = new Dock({name: 'second'});
    this.third = new Dock({name: 'third'});
  });
  context('#constructor()', function() {
    it('correctly sets default properties', function() {
      assert.equal(this.list.head, null);
      assert.equal(this.list.tail, null);
      assert.equal(this.list.count, 0);
    });
    it('builds list from array of docks', function() {
      let array = [this.first, this.second, this.third];
      let list = new DockList(array);
      assert.equal(list.head, this.first);
      assert.equal(list.tail, this.third);
      assert.equal(list.head.next, this.second);
      assert.equal(list.tail.prev, this.second);
    });
  });
  context('#append()', function() {
    it('should add to an empty list', function() {
      this.list.append(this.first);
      assert.equal(this.list.head, this.first);
      assert.equal(this.list.tail, this.first);
      assert.equal(this.list.head.prev, null);
      assert.equal(this.list.tail.next, null);
    });
    it('should add to the end of a list with a single dock', function() {
      this.list.append(this.first);
      this.list.append(this.second);
      assert.equal(this.list.tail, this.second);
      assert.equal(this.list.tail.next, null);
    });
    it('should add to the end of list with multiple docks', function() {
      this.list.append(this.first);
      this.list.append(this.second);
      this.list.append(this.third);
      assert.equal(this.list.tail, this.third);
      assert.equal(this.list.tail.next, null);
      assert.equal(this.list.tail.prev, this.second);
    });
    it('should correctly increment the count', function() {
      this.list.append(this.first);
      assert.equal(this.list.count, 1);
      this.list.append(this.first);
      assert.equal(this.list.count, 2);
    });
  });
  context('#pop()', function() {
    beforeEach(function() {
      this.list = new DockList();
      this.first = new Dock({name: 'first'});
      this.second = new Dock({name: 'second'});
      this.list.append(this.first);
      this.list.append(this.second);
    });
    it('should remove the tail', function() {
      this.list.pop();
      assert.equal(this.list.tail, this.first);
    });
    it('should decrement the count', function() {
      this.list.pop();
      assert.equal(this.list.count, 1);
    });
    it('should reset the tail correctly', function() {
      this.list.pop();
      assert.equal(this.list.tail, this.first);
    });
  });
  context('#findByLoc()', function() {
    beforeEach(function() {
      this.list.append(this.first);
      this.list.append(this.second);
      this.list.append(this.third);
    });
    it('returns dock if loc parameter is in range', function() {
      let find = new Location({x: 100, y: -100});
      this.list.tail.loc.update(find);
      let found = typeof(this.list.findByLoc(find));
      assert.equal(found, 'object');
    });
    it('returns null if loc parameter is not in range', function() {
      let find = new Location({x: 100, y: 100});
      let range = new Location({x: -100, y: -100, xmin: -200, xmax: 0, ymin: -200, ymax: 0 });
      this.list.tail.loc.update(range);
      let found = this.list.findByLoc(find);
      assert.equal(found, null);
    });
    it('returns null if loc pararmeter is not a location object', function() {

    });
    it('returns null if list is empty', function() {

    });
  });
  context('#findByName()', function() {
    it('returns dock if name matches', function() {

    });
    it('returns null if name is not in docklist', function() {

    });
    it('returns null if parameter is not a string', function() {

    });
  });
});
