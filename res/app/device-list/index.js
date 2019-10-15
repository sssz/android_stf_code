require('./device-list.css')
require('ng-file-upload')    // 这里引用了angluar上传文件功能

module.exports = angular.module('device-list', [
  require('angular-xeditable').name,
  require('stf/device').name,
  require('stf/user/group').name,
  require('stf/control').name,
  require('stf/common-ui').name,
  require('stf/settings').name,
  require('./column').name,
  require('./details').name,
  require('./empty').name,
  require('./icons').name,
  require('./stats').name,
  require('./customize').name,
  require('./search').name,
  'angularFileUpload'    // 这里添加上传文件服务
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/devices', {
        template: require('./device-list.pug'),
        controller: 'DeviceListCtrl'
      })
  }])
  .run(function(editableOptions) {
    // bootstrap3 theme for xeditables
    editableOptions.theme = 'bs3'
  })
  .controller('DeviceListCtrl', require('./device-list-controller'))
