export function listGoods() {
  let template = `

      <div class="uk-grid uk-grid-collapse">
        <div class="uk-width-1-4" ng-repeat="good in goods">
            <figure class="uk-thumbnail">
              <img ng-src="{{good.image.data}}" alt="{{good.info.name}}" ng-show="good.image">
              <figcaption class="uk-thumbnail-caption">
                <span class="goods-name" ng-bind="good.name"></span>
                <div class="uk-flex uk-flex-middle uk-flex-space-around goods-cost-content">
                  <div class="goods-cost sale">300$</div>
                  <div class="goods-cost">400$</div>
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

  }

  function controller($scope) {
    $scope.goods = getGoods();
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