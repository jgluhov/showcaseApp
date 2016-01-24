import faker from 'faker';

export function goodsFactory() {

  function getGoodsModel() {
    let name = '';
    let cost = null;
    let image = null;

    return {name, cost, image};
  }

  function getAllGoods() {
    let goods = JSON.parse(window.localStorage.getItem('goods'));
    return goods ? goods : [];
  }

  function getGoodsLength() {
    let goods = JSON.parse(window.localStorage.getItem('goods'));
    return goods ? goods.length : 0;
  }

  function saveGoods(goods) {
    let savedGoods = JSON.parse(window.localStorage.getItem('goods'));
    if (!savedGoods) savedGoods = [];

    savedGoods.push(goods);
    window.localStorage.setItem('goods', JSON.stringify(savedGoods));
  }

  function generateFakeGoods() {
    let name = faker.commerce.productName();
    let cost = faker.finance.amount();
    let image = {
      data: faker.image.sports(),
      info: {
        name: faker.company.bs()
      }
    };
    return {name, cost, image}
  }

  return {
    getGoodsModel: getGoodsModel,
    generateFakeGoods: generateFakeGoods,
    getAllGoods: getAllGoods,
    getGoodsLength: getGoodsLength,
    saveGoods: saveGoods
  };
}
