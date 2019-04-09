angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page15', {
    url: '/',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('1', {
    url: '/page16',
    templateUrl: 'templates/1.html',
    controller: '1Ctrl'
  })

  .state('page17', {
    url: '/page17',
    templateUrl: 'templates/page17.html',
    controller: 'page17Ctrl'
  })

  .state('page20', {
    url: '/page20',
    templateUrl: 'templates/page20.html',
    controller: 'page20Ctrl'
  })

  .state('page21', {
    url: '/page21',
    templateUrl: 'templates/page21.html',
    controller: 'page21Ctrl'
  })

  .state('page22', {
    url: '/page22',
    templateUrl: 'templates/page22.html',
    controller: 'page22Ctrl'
  })

  .state('page23', {
    url: '/page23',
    templateUrl: 'templates/page23.html',
    controller: 'page23Ctrl'
  })

  .state('page24', {
    url: '/page24',
    templateUrl: 'templates/page24.html',
    controller: 'page24Ctrl'
  })

  .state('page25', {
    url: '/page25',
    templateUrl: 'templates/page25.html',
    controller: 'page25Ctrl'
  })

  .state('page26', {
    url: '/page26',
    templateUrl: 'templates/page26.html',
    controller: 'page26Ctrl'
  })

  .state('page27', {
    url: '/page27',
    templateUrl: 'templates/page27.html',
    controller: 'page27Ctrl'
  })

  .state('page28', {
    url: '/page28',
    templateUrl: 'templates/page28.html',
    controller: 'page28Ctrl'
  })

  .state('page29', {
    url: '/page29',
    templateUrl: 'templates/page29.html',
    controller: 'page29Ctrl'
  })

  .state('page30', {
    url: '/page30',
    templateUrl: 'templates/page30.html',
    controller: 'page30Ctrl'
  })

  .state('page', {
    url: '/page31',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('page2', {
    url: '/page32',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page33', {
    url: '/page33',
    templateUrl: 'templates/page33.html',
    controller: 'page33Ctrl'
  })

  .state('page34', {
    url: '/page34',
    templateUrl: 'templates/page34.html',
    controller: 'page34Ctrl'
  })

$urlRouterProvider.otherwise('/')


});