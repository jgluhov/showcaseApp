export function goodsFactory() {

  function getGoods() {
    let name = '';
    let cost = 0;
    let image = null;

    return {name, cost, image};
  }

  return {
    getGoods: getGoods
  };
}
