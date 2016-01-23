
export function Config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/showcase');

  $stateProvider

    .state('showcase', {
      url: '/showcase',
      template: '<h1>Showcase</h1>'
    })

    .state('deleted-goods', {
      url: '/deleted-goods',
      template: '<h1>Deleted goods</h1>'
    })

}
