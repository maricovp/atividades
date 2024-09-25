class Personagem {
  #nome;
  #classes;
  #nivel;
  #vida;
  #mana;

  constructor(nome, classes, nivel, vida, mana) {
    this.#nome = nome;
    this.#classes = classes;
    this.#nivel = nivel;
    this.#vida = vida;
    this.#mana = mana;
  }
  //Métodos Getters e Setters
  //Métodos Getter e Setter para atributo nome
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  //Métodos Getter e Setter para atributo classes
  get classes() {
    return this.#classes;
  }
  set classes(classes) {
    this.#classes = classes;
  }
  get nivel() {
    return this.#nivel;
  }
  set nivel(nivel) {
    this.#nivel = nivel;
  }
  get vida() {
    return this.#vida;
  }
  set vida(vida) {
    this.#vida = vida;
  }
  get mana() {
    return this.#mana;
  }
  set mana(mana) {
    this.#mana = mana;
  }

  //Métodos
  //Simulando sobrecarga com rest parameter
  atacar(...args) {
    if (args.length === 0) {
      console, log(`${this.#nome} realizou um ataque normal!`);
    } else if (args.length === 1) {
      console.log(`${this.#nome} atacou com um poder de ${args[0]}!`);
    } else if (args.length === 2) {
      console.log(
        `${this.#nome} usou ${args[1]} e atacou com ${args[0]} de poder!`
      );
    } else {
      console.log(`Número inválido de argumentos`);
    }
  }

  defesa() {
    console.log(
      `#{this.#nome} se defendeu com ${this.#nivel * 2} pontos de defesa`
    );
  }

  receberDano(dano) {
    this.#vida -= dano;
    console.log(
      `${this.#nome} recebeu ${dano} de dano. Vida restante: ${this.#vida}`
    );
  }
}

class Assassino extends Personagem {
  constructor(nome, nivel, vida, mana, furtividade) {
    super(nome, "Assassino", nivel, vida, mana);
    this.furtividade = furtividade; //Atributo especifico
  }
  atacar() {
    console.log(
      `${this.nome} ataca silenciosamente com dano adicional pela furtividade!`
    );
  }

  usarFurtividade() {
    console.log(
      `${this.nome} usa sua furtividade de nivel ${this.furtividade} para se esconder`
    );
  }
}
class Paladino extends Personagem {
  constructor(nome, nivel, vida, mana, fe) {
    super(nome, "Paladino", nivel, vida, mana);
    this.fe = fe; //Atributo especifico
  }

  //Sobrescrevendo o método defesa
  defesa() {
    console.log(
      `${this.nome} se defendeu com o escudo sagrado, absorvendo mais dano com base na fe (${this.fe})!`
    );
  }

  //Me´todo especifico
  curar() {
    console.log(`${this.mome} usa sua fé para curar a si mesmo ou aliados`);
  }
}

class Mecanico extends Personagem {
  constructor(nome, nivel, vida, mana, engenharia) {
    super(nome, "Mecanico", nivel, vida, mana);
    this.engenharia = engenharia; //Atributo especifico
  }
  receberDano(dano) {
    const danoReduzido = dano - this.engenharia;
    super.receberDano(danoReduzido);
    console.log(
      `${this.nome} usou sua engenharia para reduzir o dano em ${this.engenharia}.`
    );
  }
  construirTorre() {
    console.log(`${this.nome} construiu uma torre defensiva!`);
  }
}

//Criando instancia da classe derivada Assassino
const assassino = new Assassino("Luna Sombria", 10, 100, 50, 8);
//Chamando os métodos
assassino.atacar();
assassino.usarFurtividade();

//Criando instancia da classe derivada Paladino
const paladino = new Paladino("Sir Lancelot", 12, 120, 70, 15);
//Chamando os métodos
paladino.defesa();
paladino.curar();

//Criando instancia da classe derivada Mecanico
const mecanico = new Mecanico("Roberto das Engrenagens", 8, 90, 40, 5);
//Chamando os métodos
mecanico.receberDano(30);
mecanico.construirTorre();
console.log("--------------------------------------------------------");
console.log("modificando arquivos usando setters:");
console.log("----------------------------------------------------------");

assassino.nome = "Raven";
console.log(`nome modificado: ${assassino.nome}`);
assassino.atacar();

paladino.vida =150;
console.log(`vida modificada: ${paladino.vida}`);
paladino.defesa();

mecanico.mana = 60;
console.log(`mana modificada: ${mecanico.mana}`);
mecanico.receberDano(50);