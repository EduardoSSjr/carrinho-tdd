# 🛒 Carrinho de Compras Inteligente — Projeto com TDD em JavaScript

## 📘 Sobre o Projeto

Este projeto implementa o núcleo lógico de um **carrinho de compras** utilizando **JavaScript (Node.js)** e **Jest** para testes automatizados.  
O foco principal é aplicar o **Desenvolvimento Dirigido a Testes (TDD)** na prática, seguindo o ciclo **Red → Green → Refactor**.

---

## 🧠 O que é TDD?

O **TDD (Test Driven Development)** é uma metodologia de desenvolvimento onde os **testes são criados antes do código de produção**.  
O processo segue três etapas cíclicas:

1. 🔴 **Red** — Escreve-se um teste que falha (porque a funcionalidade ainda não existe).  
2. 🟢 **Green** — Escreve-se o código mínimo necessário para o teste passar.  
3. 🧹 **Refactor** — Refatora-se o código, melhorando a estrutura sem alterar o comportamento.

Esse ciclo garante **confiabilidade**, **design limpo** e **facilidade de manutenção**, já que cada nova funcionalidade é guiada por testes automatizados.

---

## ⚙️ Funcionalidades Implementadas

O módulo `cart.js` implementa as seguintes **regras de negócio**:

- 🧮 **Soma simples:** soma o total dos produtos adicionados ao carrinho.  
- 💰 **Desconto progressivo:** aplica 10% de desconto se houver **5 ou mais itens**.  
- 🚚 **Frete:** - Grátis se o total for **maior que R$ 200,00**.  
  - Caso contrário, o frete custa **R$ 20,00**.  
- 🎟️ **Cupom de desconto:** - Se o cupom for `"FATEC10"`, aplica-se **10% adicionais** (cumulativos com o desconto progressivo).

---

## 🧩 Estrutura do Projeto

```text
carrinho-tdd/
├── package.json
├── jest.config.js
├── src/
│   └── cart.js
└── tests/
    └── cart.test.js
```

---

## 🧪 Testes Unitários com Jest

O Jest foi configurado para rodar os testes e gerar relatórios de cobertura automaticamente.

### Exemplo de teste (TDD - Fase Red)

```javascript
test('deve somar o total dos produtos', () => {
  const cart = createCart();
  cart.add({ id: 1, name: 'Caneta', price: 5.0 });
  cart.add({ id: 2, name: 'Caderno', price: 10.0 });
  expect(cart.total()).toBe(15.0); // Falha na primeira execução
});
```

### Exemplo de código após refatoração (Fase Green + Refactor)

```javascript
function createCart() {
  const items = [];
  let coupon = null;

  return {
    add(product) { items.push(product); },
    applyCoupon(code) { coupon = code; },
    subtotal() { return items.reduce((s, p) => s + p.price, 0); },
    total() { return this.subtotal(); },
    totalWithDiscount() {
      let total = this.subtotal();
      if (items.length >= 5) total *= 0.9;
      if (coupon === 'FATEC10') total *= 0.9;
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
```

---

## 🛠️ Como Executar o Projeto

**1️⃣ Clonar o repositório**
```bash
git clone https://github.com/seuusuario/carrinho-tdd.git
cd carrinho-tdd
```

**2️⃣ Instalar dependências**
```bash
npm install
```

**3️⃣ Executar os testes**
```bash
npm test
```

**4️⃣ Gerar relatório de cobertura**
```bash
npm test -- --coverage
```

---

## 💬 Boas Práticas e Commits

Durante o desenvolvimento, cada commit representou uma etapa do ciclo TDD:

| Etapa | Mensagem de Commit | Descrição |
| :---: | :--- | :--- |
| 🔴 **Red** | `test: cria primeiro teste para soma` | Escreve o teste que falha |
| 🟢 **Green** | `feat: implementa soma simples` | Faz o teste passar |
| 🧹 **Refactor** | `refactor: melhora legibilidade` | Refina o código mantendo testes verdes |

---

## 🚀 Benefícios do TDD neste Projeto

* ✅ **Confiabilidade:** Cada funcionalidade possui um teste correspondente.
* ✅ **Código limpo:** Foco em clareza e modularidade.
* ✅ **Facilidade de manutenção:** Alterações podem ser feitas com segurança.
* ✅ **Evolução natural:** As regras foram implementadas progressivamente conforme os testes.

---

## 👨‍💻 Equipe

Projeto desenvolvido para fins acadêmicos no curso de **Análise e Desenvolvimento de Sistemas**, com foco em Testes de Software e Boas Práticas de Engenharia.

---

## 🧭 Conclusão

O desenvolvimento dirigido a testes (TDD) mostrou-se extremamente eficaz neste projeto. A criação dos testes antes do código garantiu confiabilidade, qualidade e clareza na implementação das regras do carrinho. Este método contribui diretamente para a redução de erros e o aumento da produtividade da equipe de desenvolvimento.