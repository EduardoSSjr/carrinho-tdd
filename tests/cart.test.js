const { createCart } = require('../src/cart');

describe('Carrinho - regras básicas', () => {
  test('soma total dos produtos', () => {
    const cart = createCart();
    cart.add({ id: 1, name: 'Caneta', price: 5.0 });
    cart.add({ id: 2, name: 'Caderno', price: 10.0 });
    expect(cart.subtotal()).toBe(15.0);
  });

  test('aplica 10% de desconto quando 5 ou mais itens', () => {
    const cart = createCart();
    for (let i = 0; i < 5; i++) cart.add({ id: i, name: 'item'+i, price: 10.0 });
    expect(cart.totalWithDiscount()).toBeCloseTo(45.0);
  });

  test('frete grátis quando total > 200', () => {
    const cart = createCart();
    cart.add({ id: 1, price: 150 });
    cart.add({ id: 2, price: 60 });
    expect(cart.shipping()).toBe(0);
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
    expect(cart.totalWithDiscount()).toBeCloseTo(202.5); // 250->225->202.5
  });

  test('total final soma descontos + frete', () => {
    const cart = createCart();
    cart.add({ id: 1, price: 100 });
    cart.add({ id: 2, price: 50 });
    expect(cart.totalFinal()).toBeCloseTo(170); // subtotal=150 => shipping 20 => total final 170
  });
});
