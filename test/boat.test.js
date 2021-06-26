import { Boat, Dock, Location } from "../logic.js";
import { strict as assert } from 'assert';

describe('Boat', function() {
  context('#constructor()', function() {
    it('set origin and destination to null', function() {

    });
    it('set all docks last, current, and next to null', function() {

    });
    it('statusTypes array length is correct', function() {

    });
    it('set status to 3', function() {

    });
    it('set reverse to false', function() {

    });
  });
  context('#update()', function() {
    it('correctly merges object parameters', function() {

    });
    it('does not add properties outside of class', function() {

    });
    it('sets heading to reverse if destination is head of list', function() {

    });
  });
  context('#depart()', function() {
    context('if next dock is null', function() {
      it('should set reverse to true', function() {

      });
      it('should set destination to head of docklist', function() {

      });
      it('should set lastDock to tail', function() {

      });
      it('should set nextDock to prev of current dock', function() {

      });
    });
    context('if next dock is not null', function() {
      it('should update lastDock to current dock', function() {

      });
      it('should update nextDock to next if reverse is false', function() {

      });
      it('should update nextDock to prev if reverse is true', function() {

      });
    });
    it('sets status to departing according to docking time', function() {

    });
    it('sets status to in transit according to docking time', function() {

    });
  });
  context('#dock()', function() {
    it('sets status to (2 - docking) according to docking time', function() {

    });
    it('sets status to (3 - docked) accoring to docking time', function() {

    });
    it('sets status to 4 once docked', function() {

    });
  });
});
