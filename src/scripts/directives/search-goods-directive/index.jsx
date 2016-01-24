export function searchGoods() {
  function link(scope, element, attrs) {
    scope.submit = (form) => {
        // Emit event to listGoodsDirective
        // to change view of thumbnails
        scope.$emit('searchQueryEvent', {
          query: scope.searchQuery
        });
    }
  }

  function controller($scope) {
    $scope.searchQuery = '';
  }

  return {
    restrict: 'A',
    scope: {},
    link: link,
    controller: controller
  }
}
