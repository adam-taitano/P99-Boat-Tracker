// const Todos = require('../logic.js');
import * as Todos from "../logic.js";
import { strict as assert } from 'assert';
// const assert = require('assert');

describe('Location', function() {
  context('#constructor()', function() {
    beforeEach(function() {
      this.loc = new Todos.Location();
      this.obj = {};
    });
    it('should assign null to ymin and xmax', function() {
      assert.equal(this.loc.ymin, null);
      assert.equal(this.loc.xmax, null);
    });
    it('updates according to given obj parameter', function() {
      this.obj.x = 1000;
      this.loc.update(this.obj);
      assert.equal(this.loc.x, this.obj.x);
    });
  });
  context('#update()', function() {
    beforeEach(function() {
      this.loc = new Todos.Location();
      this.obj = {};
    });
    it('preserve existing properties', function() {
      this.obj.y = -1000;
      this.loc.update(this.obj);
      this.loc.update({ymax: -2000});
      assert.equal(this.obj.y, this.loc.y)
    });
    it('merge properties passed in as an object', function() {
      this.loc.y = -200;
      this.loc.update({x: 100});
      assert.equal(this.loc.y, -200);
    });
  });
  context('#isMatch()', function() {
    beforeEach(function() {
      this.loc = new Todos.Location();
      this.update = {x: -2000, y: 7500, xmin: -2500, xmax: -1500, ymin: 7000, ymax: 8000};
    });
    it('return true if parameter x < xmax', function() {
      const result = this.loc.isMatch(-2000, 0);
      assert.equal(result, true);
    });
    it('return false if parameter x > xmax', function() {
      const result = this.loc.isMatch(-1000, 0);
      assert.equal(result, false);
    });
    it('return true if parameter x > xmin', function() {
      const result = this.loc.isMatch(-1000, 0);
      assert.equal(result, true);
    });
    it('return false if paramter x < xmin', function() {
      const result = this.loc.isMatch(-3000, 0);
      assert.equal(result, false);
    });
    it('return true if parameter y < ymax', function() {
      const result = this.loc.isMatch(0, 7500);
      assert.equal(result, true);
    });
    it('return false if parameter y > ymax'), function() {
      const result = this.loc.isMatch(0, 8000);
      assert.equal(result, false);
    };
    it('return true if parameter y > ymin'), function() {
      const result = this.loc.isMatch(0, 7500);
      assert.equal(result, true);
    };
    it('return false if parameter y < ymin'), function() {
      const result = this.loc.isMatch(0, 6000);
      assert.equal(result, false);
    };
    it('return true if arguments x and y are valid'), function() {
      const result = this.loc.isMatch(-2000, 7500);
      assert.equal(result, true);
    };
    it('return false if arguments x and y are not valid'), function() {
      const result = this.loc.isMatch(-3000, 8500);
      assert.equal(result, true);
    };
  });
});
