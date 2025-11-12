function createCart() {
  const items = [];
  return {
    add(product) { items.push(product); },
    total() {
      return items.reduce((s, p) => s + p.price, 0);
    }
  };
}

module.exports = { createCart };
