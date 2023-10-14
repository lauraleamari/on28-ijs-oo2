class Ingresso{
  preco = 10

  mostrarPreco() {
    console.log(`Preço do Ingresso: R$${this.preco}`);
  }
}

class IngressoNormal extends Ingresso {}


class IngressoVIP extends Ingresso {
  preco = this.preco += 25
}

const ingressoNormal1 = new Ingresso();
ingressoNormal1.mostrarPreco();

const ingressoVIP1 = new IngressoVIP();
ingressoVIP1.mostrarPreco();