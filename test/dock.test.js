const Todos = require('../logic.js');
const assert = require('assert');

describe('Dock', function() {
  before(function() {
    this.dock = new Todos.Dock();
    this.obj = {};
  })
  context('#constructor()', function() {
    it('should assign null to next and prev as default', function() {
      assert.equal(this.dock.next, null);
      assert.equal(this.dock.prev, null);
    });
    it('updates according to given obj parameter', function() {
      this.obj.travelTime = 360;
      this.dock.update(this.obj);
      assert.equal(this.dock.travelTime, this.obj.travelTime);
    })
  });
  context('#update()', function() {
    it('preserve existing properties', function() {
      this.obj.name = 'original';
      this.dock.update(this.obj);
      this.dock.update({next: new Todos.Dock()});
      assert.equal(this.obj.name, 'original')
    });
    it('merge properties passed in as an object', function() {
      this.dock.update({name: 'updated'});
      assert.equal(this.dock.name, 'updated');
    })
  })
});