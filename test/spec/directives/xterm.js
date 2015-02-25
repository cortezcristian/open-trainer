'use strict';

describe('Directive: xterm', function () {

  // load the directive's module
  beforeEach(module('openTrainerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<xterm></xterm>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the xterm directive');
  }));
});
