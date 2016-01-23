export function listGoods() {
  let template = `
    <div class="uk-grid">
        <div class="uk-width-1-3" ng-repeat="good in goods">
            <figure class="uk-thumbnail">
              <img ng-src="{{good.image.data}}" alt="{{good.info.name}}" ng-show="good.image">
              <figcaption class="uk-thumbnail-caption">{{good.name}}
              <div class="uk-flex uk-flex-middle uk-flex-space-between">
                <div class="good-cost">300$</div>
                <div class="good-cost">400$</div>
              </div>
              Hello
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