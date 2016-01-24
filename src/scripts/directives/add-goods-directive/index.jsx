export function addGoods(goodsFactory, $compile, $templateRequest) {

  function link(scope, element, attrs) {
    let self = scope;

    $templateRequest('templates/add-goods-directive/template.html').then((html) => {
      var template = angular.element(html);
      element.append(template);
      $compile(template)(scope);
      setupModal();
      initModel();
    });

    let initModel = () => {
      self.goods = goodsFactory.getGoodsModel();
    };

    let setupModal = () => {
      let modal = element.find('.modal');
      modal
        .modal({ blurring: true })
        .modal('attach events', '.add-goods', 'show')
        .modal('setting', 'closable', false)
        .modal({
          onDeny    : onDeny,
          onApprove : onApprove
        })
    };

    let onApprove = () => {
      if(self.goods.name !== "" && self.goods.cost !== null) {
        goodsFactory.saveGoods(self.goods);
        self.$apply(() => {
          self.goods = goodsFactory.getGoodsModel();
        });
        return true;
      }
      return false
    };

    let onDeny = () => {
      return true
    };

    //scope.generateFakeGoods = () => {
    //  let goods = goodsFactory.generateFakeGoods();
    //  goodsFactory.saveGoods(goods);
    //}
  }

  return {
    restrict: 'A',
    link: link
  }
}
