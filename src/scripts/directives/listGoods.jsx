export function listGoods() {
  let template = `
      <dir-pagination-controls max-size="8" auto-hide="false"></dir-pagination-controls>
      <div class="uk-grid uk-grid-small">
        <div class="uk-width-1-4" dir-paginate="good in goods | filter: query | itemsPerPage: 8">
          <figure class="uk-thumbnail">
            <img ng-src="{{good.image.data}}" alt="" ng-show="good.image">
            <figcaption class="uk-thumbnail-caption">
              <span class="goods-name" ng-bind="good.name"></span>
              <div class="uk-flex uk-flex-middle uk-flex-space-around goods-cost-content">
                <div class="goods-cost sale" ng-bind="good.cost | sale: 1.3 | currency : $ : 0"></div>
                <div class="goods-cost" ng-bind="good.cost | currency : $ : 0"></div>
              </div>
              <div class="uk-flex uk-flex-middle uk-flex-space-between">
                <button class="uk-button uk-button-primary">Редактировать</button>
                <button class="uk-button uk-button-muted">Удалить</button>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>`;

  function link(scope, element, attrs) {
    scope.$on('searchQueryEvent', (event, args) => {
      scope.query = args.query;
    })
  }

  function controller($scope) {
    $scope.goods = getGoods();
    $scope.query = '';
  }

  let getGoods = () => {
    let goods = JSON.parse(window.localStorage.getItem('goods'));
    return goods ? goods : [];
  };

  return {
    restrict: 'A',
    link: link,
    template: template,
    controller: controller
  }
}