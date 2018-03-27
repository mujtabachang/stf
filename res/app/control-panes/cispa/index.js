require('./cispa.css')

module.exports = angular.module('stf.cispa', [
  require('stf/angular-packery').name,
  require('stf/common-ui/modals/lightbox-image').name
])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('control-panes/cispa/cispa.pug',
      require('./cispa.pug')
    )
  }])
  .controller('InfoCtrl', require('./cispa-controller'))
