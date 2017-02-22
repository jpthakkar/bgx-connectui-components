
(function() {
    'use strict';
    angular
        .module('bgx.cmp.hello')
        .service('HelloService', HelloService);

    function HelloService() {
        var hello = 'Hello ';
        
        this.sayHello = sayHello;
        ////////////////
        
        function sayHello(name) {
            var str = 'noname';
            if (name) {
                str = name;
            }
            return hello + str;
        }
    }
})();