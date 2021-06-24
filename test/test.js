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
