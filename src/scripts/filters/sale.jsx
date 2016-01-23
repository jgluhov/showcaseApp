export function saleFilter() {
  return function (text, coeff) {
    let cost = parseInt(text);
    let sale = cost * coeff;
    return sale.toString();
  }
}
