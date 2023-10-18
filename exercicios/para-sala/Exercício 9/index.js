class Funcionario {
  nome;
  cpf;
  salario
  aumento = 0.10

  constructor(nome, cpf, salario){
    this.nome = nome;
    this.cpf = cpf;
    this.salario = salario;
  }

  receberAumento() {
    this.salario += this.salario * this.aumento;
    console.log(`${this.nome} recebeu um aumento e seu novo salário é R$${this.salario}.`);
  }

  exibirDados() {
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Salário: R$${this.salario}`);
  }
}

class Gerente extends Funcionario{
  nivelGerencia;
  aumento = 0.15

  constructor(nome, cpf, salario, nivelGerencia){
    super(nome, cpf, salario)
    this.nivelGerencia = nivelGerencia;
  }

  exibirDados() {
    super.exibirDados();
    console.log(`Nível de Gerência: ${this.nivelGerencia}`);
  }
}
class Assistente extends Funcionario{
  matricula
  constructor(nome, cpf, salario, matricula){
    super(nome, cpf, salario)
    this.matricula = matricula;
  }

  exibirDados() {
    super.exibirDados();
    console.log(`Matrícula: ${this.matricula}`);
  }
}
class AssistenteTecnico extends Assistente{
  bonusSalarial

  constructor(nome, cpf, salario, matricula, bonusSalarial) {
    super(nome, cpf, salario, matricula);
    this.bonusSalarial = bonusSalarial;
  }

  exibirDados() {
    super.exibirDados();
    console.log(`Bônus Salarial: R$${this.bonusSalarial}`);
  }
}
class AssistenteAdministrativo extends Assistente{
  turno;
  adicionalNoturno;

  constructor(nome, cpf, salario, matricula, turno, adicionalNoturno){
    super(nome, cpf, salario, matricula)
    this.turno = turno;
    this.adicionalNoturno = adicionalNoturno
  }

  exibirDados() {
    super.exibirDados();
    console.log(`Turno: ${this.turno}`);
    if (this.turno === "noite" || this.turno === "Noite") {
      console.log(`Adicional Noturno: R$${this.adicionalNoturno}`);
    }
  }
}

const funcionario1 = new Funcionario("Laura", "123.456.789-00", 7500);
// funcionario1.receberAumento();
funcionario1.exibirDados();

console.log('*********************')

const gerente1 = new Gerente("Janiel", "987.654.321-00", 12000, "Sênior");
// gerente1.receberAumento();
gerente1.exibirDados();

console.log('*********************')

const assistente1 = new Assistente("Gustavo", "111.222.333-44", 4567, "A12345");
// assistente1.receberAumento();
assistente1.exibirDados();

console.log('*********************')

const assistenteTecnico1 = new AssistenteTecnico("Carla", "222.333.444-55", 2800, "T54321", 300);
// assistenteTecnico1.receberAumento();
assistenteTecnico1.exibirDados();

console.log('*********************')

const assistenteAdministrativo1 = new AssistenteAdministrativo("Lucas", "333.444.555-66", 2700, "A67890", "noite", 150);
// assistenteAdministrativo1.receberAumento();
assistenteAdministrativo1.exibirDados();