function createCart() {
  const items = [];
  return {
    add(product) { items.push(product); },
    total() {
      return items.reduce((s, p) => s + p.price, 0);
    },
    totalWithDiscount() {
      const total = items.reduce((s, p) => s + p.price, 0);
      if (items.length >= 5) return +(total * 0.9).toFixed(2);
      return total;
    }
  };
}

module.exports = { createCart };

