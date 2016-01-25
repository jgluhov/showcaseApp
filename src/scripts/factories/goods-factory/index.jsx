//import faker from 'faker';

export function goodsFactory($localStorage) {

  function getGoodsModel() {
    let name = '';
    let cost = null;
    let image = null;

    return {name, cost, image};
  }

  function getAllGoods() {
    return $localStorage.goods ? $localStorage.goods : [];
  }

  function getGoodsLength() {
    let goods = JSON.parse(window.localStorage.getItem('goods'));
    return goods ? goods.length : 0;
  }

  function saveGoods(goods) {
    if (!$localStorage.goods)
      $localStorage.goods = [];

    $localStorage.goods.push(goods);
  }

  //function generateFakeGoods() {
  //  let name = faker.commerce.productName();
  //  let cost = faker.finance.amount();
  //  let image = {
  //    data: faker.image.sports(),
  //    info: {
  //      name: faker.company.bs()
  //    }
  //  };
  //  return {name, cost, image}
  //}

  return {
    getGoodsModel: getGoodsModel,
    //generateFakeGoods: generateFakeGoods,
    getAllGoods: getAllGoods,
    getGoodsLength: getGoodsLength,
    saveGoods: saveGoods
  };
}
