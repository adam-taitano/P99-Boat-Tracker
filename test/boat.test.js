import { Boat, Dock, DockList, Location } from "../logic.js";
import { strict as assert } from 'assert';

describe('Boat', function() {
  beforeEach(function() {
    this.boat = new Boat();
  });
  context('#constructor()', function() {
    it('set origin and destination to null', function() {
      assert.equal(this.boat.origin, null);
      assert.equal(this.boat.destination, null);
    });
    it('set all docks last, current, and next to null', function() {
      assert.equal(this.boat.lastDock, null);
      assert.equal(this.boat.currentDock, null);
      assert.equal(this.boat.nextDock, null);
    });
    it('statusTypes array length is correct', function() {
      let length = this.boat.statusTypes.length;
      assert.equal(length, 4);
    });
    it('set status to 3', function() {
      assert.equal(this.boat.status, 3);
    });
    it('set reverse to false', function() {
      assert.equal(this.boat.reverse, false);
    });
  });
  context('#update()', function() {
    beforeEach(function() {
      this.merge = new Boat();
      this.merge.reverse = true;
      this.merge.nextDock = new Dock();
      this.merge.other = 0;
      this.boat.update(this.merge);
    });
    it('correctly merges reverse to updated parameters', function() {
      assert.equal(this.boat.reverse, true);
    });
    it('does not add properties outside of class', function() {
      assert.equal(typeof this.boat.other, 'undefined')
    });
    it('nextDock is not null', function() {
      assert.notEqual(this.boat.nextDock, null);
    });
  });
  beforeEach(function() {
    this.list = new DockList();
    this.first = new Dock({name: 'first'});
    this.middle = new Dock({name: 'second'});
    this.last = new Dock({name: 'third'});
  });
  context('#depart()', function() {
    beforeEach(function() {
      this.boat.currentDock = this.last;
      this.boat.update();
      this.boat.depart();
    });
    context('if next dock is null', function() {
      it('should set reverse to true', function() {
        assert.equal(this.boat.reverse, true);
      });
      it('should set destination to head of docklist', function() {
        assert.equal(this.boat.destination, this.first);
      });
      it('should set lastDock to tail', function() {
        assert.equal(this.boat.lastDock, this.last);
      });
      it('should set currentDock to null', function() {
        assert.equal(this.boat.currentDock, null);
      });
      it('should set nextDock to prev of lastDock', function() {
        assert.equal(this.boat.nextDock, this.last.prev);
      });
    });
    context('if next dock is not null', function() {
      beforeEach(function() {
        this.boat.currentDock = this.first;
        this.boat.update();
        this.boat.depart();
      });
      it('should update currentDock to lastDock', function() {
        assert.equal(this.currentDock, this.first);
      });
      it('should update nextDock to next if reverse is false', function() {
        assert.equal(this.boat.nextDock, this.last);
        assert.equal()
      });
      it('should update nextDock to prev if reverse is true', function() {
        this.boat.depart();
        this.boat.dock();
        assert.equal(this.boat.nextDock, this.middle);
      });
    });
    it('sets status to departing according to docking time', function() {
      assert.equal(false, true);
    });
    it('sets status to in transit according to docking time', function() {
      assert.equal(false, true);
    });
    it('sets lastDock hasBoat to false', function() {
      assert.equal(this.boat.lastDock, false);
    });
  });
  context('#dock()', function() {
    it('sets status to (2 - docking) according to docking time', function() {
      assert.equal(false, true);
    });
    it('sets status to (3 - docked) accoring to docking time', function() {
      assert.equal(false, true);
    });
    it('sets status to 4 once docked', function() {
      assert.equal(this.boat.stats, 4);
    });
    it('sets dock.hasBoat to true', function() {
      assert.equal(this.boat.lastDock.hasBoat, true)
    });
  });
});
