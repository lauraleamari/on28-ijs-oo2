class Mae {
  nacionalidade;
  corDosOlhos;
  corDoCabelo

  constructor (nacionalidade, corDosOlhos, corDoCabelo) {
    this.nacionalidade = nacionalidade;
    this.corDosOlhos = corDosOlhos;
    this.corDoCabelo = corDoCabelo;
  }

  mostrarCaracterísticas(){
    console.log(`nacionalidade: ${this.nacionalidade}, cor dos olhos: ${this.corDosOlhos}, cor do cabelo: ${this.corDoCabelo}`)
  }

}

class Filha extends Mae{}

const pessoa1 = new Mae('Brasileira', 'Verdes', 'Castanho')
const pessoa2 = new Filha('Brasileira', 'Preto', 'Loiro')
pessoa2.mostrarCaracterísticas()