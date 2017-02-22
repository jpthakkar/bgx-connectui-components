'use strict';

describe('HelloService', function () {
  
  var helloService;

  beforeEach(module('bgx.cmp.hello'));

  beforeEach(inject(function(_HelloService_) {
    helloService = _HelloService_;
  }));

  it('should exists', function() {
    expect(helloService).toBeDefined();
  });
  
  describe('.sayHello()', function () {
    
    it('should be defined', function() {
      expect(helloService.sayHello).toBeDefined();
    });

    it('should say hello jigar', function () {
      expect(helloService.sayHello('Jigar')).toEqual('Hello Jigar');
    });

    it('should say hello noname', function () {
      expect(helloService.sayHello(undefined)).toEqual('Hello noname');
    });
  });
 
});
