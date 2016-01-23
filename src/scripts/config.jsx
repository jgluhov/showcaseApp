
export function Config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/showcase');

  $stateProvider

    .state('showcase', {
      url: '/showcase',
      templateUrl: './templates/showcase.html'
    })

    .state('deleted-goods', {
      url: '/deleted-goods',
      templateUrl: './templates/deleted-goods.html'
    })

}
