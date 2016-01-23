export function addGoods(goodsFactory) {

  function link(scope, element, attrs) {
    scope.submit = (form) => {
      scope.goods.image = scope.imageDropController.getImage();
      saveGoods(scope.goods);

      scope.clearForm();
      scope.closeModal();
    };

    scope.clearForm = () => {
      scope.imageDropController.deleteImage();
      scope.goods = goodsFactory.getGoods();
    };

    scope.closeModal = () => {
      let modal = UIkit.modal("#addGood");

      if ( modal.isActive() )
        modal.hide();

    };
  }

  function controller($scope) {
    $scope.goods = goodsFactory.getGoods();

    this.register = (imageDropController) => {
      $scope.imageDropController = imageDropController;
    }
  }

  let saveGood = function (goods) {
    let savedGoods = JSON.parse(window.localStorage.getItem('goods'));
    if (!savedGoods) savedGoods = [];

    savedGoods.push(goods);
    window.localStorage.setItem('goods', JSON.stringify(savedGoods));
  };

  return {
    restrict: 'A',
    link: link,
    controller: controller
  }
}
