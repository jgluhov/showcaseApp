import './styles.styl'

export function listGoods(goodsFactory) {
  function link(scope, element, attrs) {
    scope.$on('searchQueryEvent', (event, args) => {
      scope.searchQuery = args.searchQuery;
    });
    scope.$on('selectItemPerPageEvent', (event, args) => {
      scope.itemsPerPage = parseInt(args.itemsPerPage);
    });
  }

  function controller($scope) {
    $scope.searchQuery = '';
    $scope.itemsPerPage = 8;
  }

  return {
    restrict: 'A',
    link: link,
    controller: controller,
    templateUrl: 'templates/list-goods-directive/template.html'
  }
}