const Dock = require('../logic.js');
const assert = require('assert');

describe('Dock', function() {
  describe('#constructor()', function() {
    it('should assign null to next and prev properties if not provided', function() {
      let dock = new Dock.Dock();
      assert.equal(dock.next, null);
      assert.equal(dock.prev, null);
    });
  });
});
