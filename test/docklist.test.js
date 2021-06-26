import { Dock } from "../logic.js";
import { DockList } from "../logic.js";
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

  });
  context('#findByName()', function() {

  });
});
