'use strict';

describe('Filter: startfrom', function () {

  // load the filter's module
  beforeEach(module('simpledbApp'));

  // initialize a new instance of the filter before each test
  var startfrom;
  beforeEach(inject(function ($filter) {
    startfrom = $filter('startfrom');
  }));

  it('should return the input prefixed with "startfrom filter:"', function () {
    var text = 'angularjs';
    expect(startfrom(text)).toBe('startfrom filter: ' + text);
  });

});
