export function goodsPerPageService(goodsFactory) {
  this.itemsPerPage = 8;
  this.items = ['8', '12', '16', 'Все'];

  this.selectItem = (index) => {
    this.itemsPerPage = this.convertItem(index);
    return this.itemsPerPage;
  };

  this.convertItem = (index) => {
    return index === this.items.length ?
      goodsFactory.getGoodsLength() :
      parseInt(this.items[index])
  };
}
