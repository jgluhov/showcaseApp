export function totalGoods() {

  let template = `<div>Всего товаров <strong ng-bind="totalGoods"></strong></div>`;

  function link(scope, element, attrs) {

  }

  function controller($scope) {
    $scope.totalGoods = getTotalGoods();
  }

  let getTotalGoods = () => {
    let goods = JSON.parse(window.localStorage.getItem('goods'));
    return goods ? goods.length : 0;
  };

  return {
    restrict: 'A',
    link: link,
    template: template,
    controller: controller
  }
}