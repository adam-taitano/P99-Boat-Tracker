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
      assert.equal(this.boat.prevDock, null);
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
    it('correctly sets reverse to true', function() {
      assert.equal(this.boat.reverse, true);
    });
    it('does not add properties outside of class', function() {
      assert.equal(typeof this.boat.other, 'number')
    });
    it('nextDock is not null', function() {
      assert.notEqual(this.boat.nextDock, null);
    });
    it('updates nextDock to currentDock.next', function() {

    });
    it('updates prevDock to currentDock.prev', function() {

    });
  });
  beforeEach(function() {
    this.list = new DockList();
    this.first = new Dock({name: 'first'});
    this.middle = new Dock({name: 'second'});
    this.last = new Dock({name: 'third'});
  });
  context('#traverse()', function() {
    it('returns false if nextDock is null', function() {

    });
    it('returns true if nextDock is not null', function() {

    });
    it('sets nextDock to currentDock.next', function() {

    });
    it('sets currentDock to null', function() {

    });
  });
  context('#reverse()', function() {
    it('returns false if prevDock is null', function() {

    });
    it('returns true of prevDock is not null', function() {

    });
    it('sets prevDock to currentDock.prev', function() {

    });
    it('sets currentDock to null', function() {

    });
  });
  context('#depart()', function() {
    beforeEach(function() {
      this.boat.currentDock = this.last;
      this.boat.depart();
    });
      context('if reverse is false', function() {
        it('checks if #traverse() is true', function() {
          assert.equal(this.boat.reverse, true);
        });
        it('if #traverse() is false, sets reverse to true', function() {

        });
        it('if #traverse() is false, calls itself', function() {

        });
      context('if reverse is true', function() {
        it('checks if #reverse() is true', function() {

        })
        it('sets reverse to false if #reverse() is false', function() {

        });
      });
    });
    context('if reverse is true', function() {
      beforeEach(function() {
        this.boat.currentDock = this.first;
        this.boat.update();
        this.boat.depart();
      });
      it('should update currentDock to prevDock', function() {
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
    it('sets prevDock hasBoat to false', function() {
      assert.equal(this.boat.prevDock, false);
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
      assert.equal(this.boat.prevDock.hasBoat, true)
    });
  });
});
