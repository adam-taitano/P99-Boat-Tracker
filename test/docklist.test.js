const Todos = require('../logic.js');
const assert = require('assert');

describe('DockList', function() {
  context('#append()', function() {
    beforeEach(function() {
      this.list = new Todos.DockList();
      this.first = new Todos.Dock({name: 'first'});
      this.second = new Todos.Dock({name: 'second'});
      this.third = new Todos.Dock({name: 'third'});
    });
    it('should add to an empty list', function() {
      this.list.append(this.first);
      assert.equal(this.list.head, this.first);
      assert.equal(this.list.next, null);
      assert.equal(this.list.prev, null);
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
    });
  });
  context('#pop()', function() {
    beforeEach(function() {
      this.list = new Todos.DockList();
      this.first = new Todos.Dock({name: 'first'});
      this.second = new Todos.Dock({name: 'second'});
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
    })
  });
  context('#findByLoc()', function() {

  });
  context('#findByName()', function() {

  })
})
