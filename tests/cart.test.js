const { createCart } = require('../src/cart');

test('deve somar o total dos produtos', () => {
  const cart = createCart();
  cart.add({ id: 1, name: 'Caneta', price: 5.0 });
  cart.add({ id: 2, name: 'Caderno', price: 10.0 });
  expect(cart.total()).toBe(15.0);
});

test('aplica 10% de desconto quando 5 ou mais itens', () => {
  const cart = createCart();
  for (let i = 0; i < 5; i++) {
    cart.add({ id: i, name: 'item'+i, price: 10.0 });
  }
  expect(cart.totalWithDiscount()).toBeCloseTo(45.0); // 5*10 = 50 → 10% off = 45
});
