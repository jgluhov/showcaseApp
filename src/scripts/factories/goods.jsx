import faker from 'faker';

export function goodsFactory() {

  function getGoods() {
    let name = '';
    let cost = 0;
    let image = null;

    return {name, cost, image};
  }

  function getFakeGoods() {
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
    getGoods: getGoods,
    getFakeGoods: getFakeGoods
  };
}
