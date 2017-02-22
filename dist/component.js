/*!
 * See LICENSE in this repository for license information
 */
(function(){
'use strict';

angular
  .module('myComponent.version', [])
  .value('version', '0.1');

(function() {
    'use strict';
	
	angular
    .module('bgx.cmp.hello', []);
})();
'use strict';

angular
  .module('myComponent.version')
  .directive('appVersion', ['version', function (version) {
    return function (scope, elm) {
      elm.text(version);
    };
  }]);


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
})();