function createCart() {
  const items = [];
  return {
    add(product) { items.push(product); },
    subtotal() {
      return items.reduce((s, p) => s + p.price, 0);
    },
    total() {
      return this.subtotal();
    },
    totalWithDiscount() {
      const total = this.subtotal();
      if (items.length >= 5) return +(total * 0.9).toFixed(2);
      return total;
    },
    shipping() {
      const total = this.subtotal();
      return total > 200 ? 0 : 20;
    }
  };
}

module.exports = { createCart };
