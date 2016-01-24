'use strict';

export function goodsPerPage(goodsPerPageService) {

  function link(scope, element, attrs) {

    scope.select = ($index) => {
      goodsPerPageService.selectItem($index);
      scope.selected = $index;
    }
  }

  function controller($scope) {
    $scope.selected = 0;
    $scope.items = goodsPerPageService.items;
  }

  return {
    restrict: 'A',
    templateUrl: 'templates/goods-per-page-directive/template.html',
    link: link,
    controller: controller
  }

}
