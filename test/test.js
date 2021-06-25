const Todos = require('../logic.js');
const assert = require('assert');

describe('Dock', function() {
  describe('#constructor()', function() {
    it('should assign null to next and prev properties if not provided', function() {
      let dock = new Todos.Dock();
      assert.equal(dock.next, null);
      assert.equal(dock.prev, null);
    });
    it('properly updates according to parameter given', function() {
      let dock = new Todos.Dock();
      let parameter = {};
      parameter.travelTime = 360;
      dock.update(parameter);
      assert.equal(dock.travelTime, parameter.travelTime);
    })
  });
});

describe('DockList', function() {
  describe('#append()', function() {
    beforeEach(function() {
      this.list = new Todos.DockList();
      this.dock = new Todos.Dock();
    });
    it('should add to an empty list', function() {
      this.list.append(this.dock);
      assert.equal(this.list.head, this.dock);
      assert.equal(this.list.next, null);
      assert.equal(this.list.prev, null);
    });
    it('should add to the end of a list with a single dock', function() {

    });
    it('should add to the end of list with multiple docks'), function() {

    };
    it('should correctly increment the count', function() {

    });
  });
  describe('#pop()', function() {

  });
  describe('#findByLoc()', function() {

  });
  describe('#findByName()', function() {

  })
})
