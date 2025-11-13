🛒 Carrinho de Compras Inteligente — Projeto TDD com JavaScript e Jest
📘 Sobre o Projeto

Este projeto é uma simulação do núcleo lógico de um e-commerce, desenvolvido em JavaScript (Node.js) com foco em Desenvolvimento Dirigido a Testes (TDD).
O objetivo é demonstrar como aplicar o ciclo Red → Green → Refactor na prática, implementando e validando regras de negócio de forma incremental.

🧠 O que é TDD?

O Desenvolvimento Dirigido a Testes (TDD - Test Driven Development) é uma metodologia em que os testes são escritos antes do código de produção.
O fluxo é guiado por um ciclo iterativo de três etapas:

🔴 Red — Escrever um teste que falha (porque a funcionalidade ainda não existe).

🟢 Green — Escrever o código mínimo necessário para fazer o teste passar.

🧹 Refactor — Refatorar o código, melhorando sua estrutura sem quebrar os testes.

Em resumo: primeiro falha, depois funciona, e por fim fica bonito.

Essa prática garante código mais confiável, baixa regressão e design mais limpo, já que você só implementa o que é realmente necessário.

⚙️ Funcionalidades Implementadas

O módulo cart.js implementa as seguintes regras de negócio:

Soma simples: soma o total dos produtos do carrinho.

Desconto progressivo: aplica 10% de desconto se houver 5 ou mais itens.

Frete:

Grátis se o total for acima de R$ 200,00.

Caso contrário, o frete custa R$ 20,00.

Cupom de desconto:

Cupom "FATEC10" concede 10% adicionais, cumulativos com o desconto progressivo.

🧪 Testes Unitários com Jest

Os testes foram escritos com o Jest, framework de testes para JavaScript.
Durante o desenvolvimento, seguimos o ciclo TDD:

1️⃣ Red – Escrevendo o primeiro teste
test('soma total dos produtos', () => {
  const cart = createCart();
  cart.add({ id: 1, name: 'Caneta', price: 5.0 });
  cart.add({ id: 2, name: 'Caderno', price: 10.0 });

  expect(cart.total()).toBe(15.0); // FALHA inicialmente
});

2️⃣ Green – Criando o código mínimo
function createCart() {
  const items = [];
  return {
    add(product) { items.push(product); },
    total() { return items.reduce((sum, p) => sum + p.price, 0); }
  };
}

3️⃣ Refactor – Melhorando a estrutura

Após todos os testes passarem, o código foi refatorado para incluir novas regras (desconto, frete e cupom) sem alterar o comportamento validado pelos testes existentes.

🧩 Mocks e Simulação

Para fins didáticos, também é demonstrado o uso de mocks no Jest — uma técnica que permite simular comportamentos externos, como sensores IoT ou APIs.
Exemplo de mock (testando leitura simulada de sensor):

const sensor = { readTemperature: jest.fn(() => 25) };
expect(sensor.readTemperature()).toBe(25);
expect(sensor.readTemperature).toHaveBeenCalled();

🛠️ Instalação e Execução
1. Clone o repositório
git clone https://github.com/seuusuario/carrinho-tdd.git
cd carrinho-tdd

2. Instale as dependências
npm install

3. Execute os testes
npm test

4. Verifique a cobertura
npm test -- --coverage

💬 Commits e Boas Práticas

Durante o desenvolvimento, os commits foram feitos a cada etapa do ciclo TDD:

Etapa	Mensagem de Commit	Descrição
🔴 Red	test: cria primeiro teste para soma de produtos	Escreve o teste que falha
🟢 Green	feat: implementa soma simples dos produtos	Faz o teste passar
🧹 Refactor	refactor: melhora legibilidade e separa lógica de desconto	Refina o código mantendo testes verdes

📈 Cada commit no Git reflete uma evolução incremental validada por testes.

🚀 Benefícios do TDD neste projeto

Confiabilidade: cada funcionalidade foi criada com um teste correspondente.

Design limpo: o código é simples, modular e fácil de entender.

Evolutivo: novas regras de negócio podem ser adicionadas sem medo de quebrar as existentes.

Documentação viva: os testes funcionam como documentação executável.

🧩 Estrutura do Projeto
carrinho-tdd/
├── package.json
├── jest.config.js
├── src/
│   └── cart.js
└── tests/
    └── cart.test.js

👨‍💻 Equipe

Projeto desenvolvido para fins acadêmicos — disciplina de Análise e Desenvolvimento de Sistemas (ADS), com foco em Testes de Software e Boas Práticas de Desenvolvimento.

📚 Referências

Kent Beck — Test Driven Development: By Example

Documentação oficial do Jest: https://jestjs.io/docs/getting-started

Martin Fowler — Refactoring: Improving the Design of Existing Code