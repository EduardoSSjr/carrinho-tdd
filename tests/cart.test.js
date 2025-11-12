const { createCart } = require('../src/cart');

test('deve somar o total dos produtos', () => {
  const cart = createCart();
  cart.add({ id: 1, name: 'Caneta', price: 5.0 });
  cart.add({ id: 2, name: 'Caderno', price: 10.0 });
  expect(cart.total()).toBe(15.0);
});
