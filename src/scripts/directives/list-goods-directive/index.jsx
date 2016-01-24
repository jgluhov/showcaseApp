export function listGoods(goodsFactory) {
  let template = `
      <div class="uk-align-left" total-goods></div>
      <div class="uk-align-right" goods-per-page></div>
      <dir-pagination-controls max-size="itemsPerPage" direction-links="false" auto-hide="false"></dir-pagination-controls>
      <div class="uk-grid uk-grid-small goods-list-content">
        <div class="uk-width-1-4" dir-paginate="good in goods | filter: searchQuery | itemsPerPage: itemsPerPage">
          <figure class="uk-thumbnail">
            <img ng-src="{{good.image.data}}" alt="" ng-show="good.image">
            <figcaption class="uk-thumbnail-caption">
              <span class="goods-name" ng-bind="good.name"></span>
              <div class="uk-flex uk-flex-middle uk-flex-space-around goods-cost-content">
                <div class="goods-cost sale" ng-bind="good.cost | sale: 1.3 | currency : $ : 0"></div>
                <div class="goods-cost" ng-bind="good.cost | currency : $ : 0"></div>
              </div>
              <div class="uk-flex uk-flex-middle uk-flex-space-between">
                <button class="uk-button uk-button-primary button-showcase-secondary">Редактировать</button>
                <button class="uk-button uk-button-muted">Удалить</button>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <dir-pagination-controls max-size="itemsPerPage" direction-links="false" auto-hide="false"></dir-pagination-controls>
      `;

  function link(scope, element, attrs) {
    scope.$on('searchQueryEvent', (event, args) => {
      scope.searchQuery = args.searchQuery;
    });
    scope.$on('selectItemPerPageEvent', (event, args) => {
      scope.itemsPerPage = parseInt(args.itemsPerPage);
    });
  }

  function controller($scope) {
    $scope.goods = goodsFactory.getAllGoods();
    $scope.searchQuery = '';
    $scope.itemsPerPage = 8;
  }

  return {
    restrict: 'A',
    link: link,
    template: template,
    controller: controller
  }
}