export function imageDrop() {

  function link(scope, element, attrs, controllers) {

    let imageDropController = controllers[0];
    let addGoodController = controllers[1];
    addGoodController.register(imageDropController);

    let dragOver = (e) => {
      e.preventDefault();
      element.addClass('drag-over');
    };

    let dragLeave = (e) => {
      e.preventDefault();
      element.removeClass('drag-over');
    };

    let uploadImage = (e) => {
      let file = e.originalEvent.dataTransfer.files[0];

      let reader = new FileReader();
      reader.onload = function(event) {
        let data = event.target.result;
        scope.image = {info: file, data: data};
        showImage(scope.image);
      };
      reader.readAsDataURL(file);
    };

    let showImage = (image) => {
      element.after(`
      <div class="uk-thumbnail uk-thumbnail-mini">
        <img src="${image.data}">
        <div class="uk-thumbnail-caption">${image.info.name}</div>
      </div>
      `);
    };

    element.bind('dragover', dragOver);
    element
      .bind('dragleave', dragLeave)
      .bind('drop', (e) => {
        dragLeave(e);
        uploadImage(e)
      })
  }

  function controller($scope) {
    $scope.image = {};

    this.getImage = () => {
      return $scope.image;
    }
  }

  return {
    require: ['imageDrop', '^addGood'],
    link: link,
    controller: controller
  }
}
