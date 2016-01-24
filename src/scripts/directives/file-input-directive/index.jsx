import './styles.styl';

export function fileInput() {
  function link(scope, element, attrs) {
    let button = element.find('.button');
    let input = element.find('#goods-image');
    button.on('click', () => {
      input.click();
    })
  }

  return {
    restrict: 'A',
    link: link,
    templateUrl: 'templates/file-input-directive/template.html'
  }
}
