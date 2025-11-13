function createCart() {
  const items = [];
  let coupon = null;
  return {
    add(product) { items.push(product); },
    applyCoupon(code) { coupon = code; },
    subtotal() {
      return items.reduce((s, p) => s + p.price, 0);
    },
    totalWithDiscount() {
      let total = this.subtotal();
      if (items.length >= 5) total = total * 0.9; // 10% progressivo
      if (coupon === 'FATEC10') total = total * 0.9; // +10%
      return +total.toFixed(2);
    },
    shipping() {
      const total = this.subtotal();
      return total > 200 ? 0 : 20;
    },
    totalFinal() {
      return this.totalWithDiscount() + this.shipping();
    }
  };
}

module.exports = { createCart };
