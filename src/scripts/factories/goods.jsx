import faker from 'faker';

export function goodsFactory() {

  function getGoodsModel() {
    let name = '';
    let cost = 0;
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
    getGoodsLength: getGoodsLength
  };
}
