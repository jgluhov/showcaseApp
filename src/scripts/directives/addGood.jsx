export function addGood() {

  function link(scope, element, attrs) {
    scope.submit = (form) => {
      scope.good.image = scope.imageDropController.getImage();
      saveGood(scope.good);

      scope.clearForm();
      scope.closeModal();
    };

    scope.clearForm = () => {
      scope.imageDropController.deleteImage();
      scope.good = initGood();
    };

    scope.closeModal = () => {
      let modal = UIkit.modal("#addGood");

      if ( modal.isActive() )
        modal.hide();

    };
  }

  function controller($scope) {
    $scope.good = initGood();

    this.register = (imageDropController) => {
      $scope.imageDropController = imageDropController;
    }
  }

  let initGood = () => {
    let name = '';
    let cost = 0;
    let image = null;
    return {name, cost, image};
  };

  let saveGood = function (good) {
    let goods = JSON.parse(window.localStorage.getItem('goods'));
    if (!goods) goods = [];

    goods.push(good);
    window.localStorage.setItem('goods', JSON.stringify(goods));
  };

  return {
    restrict: 'A',
    link: link,
    controller: controller
  }
}
