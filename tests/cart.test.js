const { createCart } = require('../src/cart');

test('deve somar o total dos produtos', () => {
  const cart = createCart();
  cart.add({ id: 1, name: 'Caneta', price: 5.0 });
  cart.add({ id: 2, name: 'Caderno', price: 10.0 });
  expect(cart.subtotal()).toBe(15.0);
});

test('aplica 10% de desconto quando 5 ou mais itens', () => {
  const cart = createCart();
  for (let i = 0; i < 5; i++) {
    cart.add({ id: i, name: 'item'+i, price: 10.0 });
  }
  expect(cart.totalWithDiscount()).toBeCloseTo(45.0); // 5*10 = 50 → 10% off = 45
});

test('frete grátis quando total > 200', () => {
  const cart = createCart();
  cart.add({ id: 1, price: 150 });
  cart.add({ id: 2, price: 60 });
  expect(cart.shipping()).toBe(0); // 210 > 200
});

test('frete = 20 quando total <= 200', () => {
  const cart = createCart();
  cart.add({ id: 1, price: 50 });
  expect(cart.shipping()).toBe(20);
});

test('aplica cupom FATEC10 junto com desconto progressivo (cumulativo)', () => {
  const cart = createCart();
  for (let i = 0; i < 5; i++) cart.add({ id: i, price: 50 }); // subtotal = 250
  cart.applyCoupon('FATEC10');
  // subtotal 250 -> 10% progressivo = 225 -> mais 10% cupom = 202.5
  expect(cart.totalFinal()).toBeCloseTo(202.5);
});

