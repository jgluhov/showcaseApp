export function imageDrop() {

  function link(scope, element, attrs) {
    let dragOver = () => {
      element.addClass('drag-over');
    };

    let dragLeave = () => {
      element.removeClass('drag-over');
    };

    element.bind('dragover', dragOver);
    element.bind('dragleave', dragLeave);
  }

  return {
    restrict: 'A',
    scope: {
    },
    link: link
  }
}
