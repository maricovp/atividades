
class Personagem {
  constructor(nome) {
    if (new.target === Personagem) {
      throw new Error(
        "Não é possivel instanciar a classe abstrata Personagem diretamente"
      );
    }
    this.nome = nome;
  }

 
  atacar() {
    throw new Error(
      "O método atacar() deve ser implementado pela classe derivada"
    );
  }


  defender() {
    throw new Error(
      "O método defender() deve ser implementado pela classe derivada"
    );
  }
}

class Guerreiro extends Personagem {
  constructor(nome, arma) {
    super(nome);
    this.arma = arma;
  }


  atacar() {
    console.log(`${this.nome} ataca com a ${this.arma}!`);
  }

  defender() {
    console.log(`${this.nome} levantou o escudo para se defender!`);
  }
}

class Mago extends Personagem {
  constructor(nome, magia) {
    super(nome);
    this.magia = magia;
  }


  atacar() {
    console.log(`${this.nome} lança a ${this.magia}!`);
  }

  defender() {
    console.log(`${this.nome} usa um escudo mágico para se defender!`);
  }
}

try {
  const personagem = new Personagem("invalido");
} catch (error) {
  console.log(error.message);
}

const guerreiro = new Guerreiro("Thorin", "Espada");
guerreiro.atacar();
guerreiro.defender();

const mago = new Mago("Gandalf", "Bola de Fogo");
mago.atacar();
mago.defender();
