export function fileModel($parse) {
  function link(scope, element, attrs) {
    let model = $parse(attrs.fileModel);
    let modelSetter = model.assign;
    let reader = new FileReader();

    element.bind('change', (e) => {
      let file = element[0].files[0];

        reader.onload = (e) => {
          scope.$apply(() => {
            let data = e.target.result;
            modelSetter(scope, { file: file, data: data });
          })
        };
        reader.readAsDataURL(file);
    });
  }

  return {
    restrict: 'A',
    link: link
  }
}
