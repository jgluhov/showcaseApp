export function addGood() {

  function link(scope, element, attrs) {
    scope.submit = () => {
      console.log(scope.imageDropController.getImage())
    }
  }

  function controller($scope) {

    this.register = (imageDropController) => {
      $scope.imageDropController = imageDropController;
    }
  }

  return {
    restrict: 'A',
    link: link,
    controller: controller
  }
}
