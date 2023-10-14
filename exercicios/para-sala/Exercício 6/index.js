class Animal {
  nome;
  idade

  constructor(nome, idade){
    this.nome = nome
    this.idade = idade;
  }
}

class Cachorro extends Animal{
  corDoPelo;
  porte

  constructor(nome, idade, corDoPelo, porte){
    super(nome, idade)
    this.corDoPelo = corDoPelo;
    this.porte = porte
  }
}

const animal1 = new Animal('Chiquinho', 5)
console.log(animal1)

const animal2 = new Cachorro('Penelope', 6, 'mesclado', 'pequeno')
console.log(animal2)