export function addGood() {

  let modal = ``;

  function link(scope, element, attrs) {
    console.log('addGood')
  }

  return {
    restrict: 'A',
    link: link
  }
}
