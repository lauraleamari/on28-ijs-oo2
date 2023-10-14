class Ingresso{
  lote
  preco_promocional = 10
  preco_primeiro_lote = 15
  preco_segundo_lote = 20
  preco_terceiro_lote = 25

  constructor(lote){
    this.lote = lote
  }

  mostrarPreco() {
    if(this.lote === 'promocial'){
      console.log(`Preço do Ingresso: R$${this.preco_promocional}`)
    }
    if(this.lote === 'primeiro'){
      console.log(`Preço do Ingresso: R$${this.preco_primeiro_lote}`)
    }
    if(this.lote === 'segundo'){
      console.log(`Preço do Ingresso: R$${this.preco_segundo_lote}`)
    }
    if(this.lote === 'terceiro'){
      console.log(`Preço do Ingresso: R$${this.preco_terceiro_lote}`)
    } else {
      console.log('Lote não encontrado')
    }
  }
}

class IngressoNormal extends Ingresso {}
class IngressoVIP extends Ingresso {
  preco_promocional = 50
  preco_primeiro_lote = 60
  preco_segundo_lote = 70
  preco_terceiro_lote = 80
}

const ingressoNormal1 = new IngressoNormal('segundo')
ingressoNormal1.mostrarPreco()

const ingressoVip1 = new IngressoVIP('segundo')
ingressoVip1.mostrarPreco()
