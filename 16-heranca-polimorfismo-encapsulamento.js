class personagem {
  #nome;
  #classe;
  #nivel;
  #vida;
  #mana;

  constructor(nome, classe, nivel, vida, mana) {
    this.#nome = nome;
    this.#classe = classe;
    this.#nivel = nivel;
    this.#vida = vida;
    this.#mana = mana;
  }

  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  get classe() {
    return this.#classe;
  }
  set classe(classe) {
    this.#classe = classe;
  }
  get nivel() {
    return this.#nivel;
  }
  set niveç(nivel) {
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
    this.#vida = mana;
  }

 atacar ( ... args)  
 {
    if (args.length === 0)
        console.log(`${this.nome} realizou um ataque normal!`);
    else if (args.length === 1)
        console.log(`${this.nome} atacou com um poder de  ${args[0]}`);
    else if (args.length === 2)
        console.log(`${this.nome} usou ${args[1]} de poder e atacou com${args[0]} de poder! `);
 else{
    console.log(`Erro: ${args.length} argumentos fornecidos. Deve ser 0, 1 ou 2.`);
 }

defesa() 
{
    console.log(`${$this.#nome} se defendeu cp, ${this.#nivel * 2} pontos de defesa`)
}

receberDano(Dano) 

    this.#vida -= dano;
    console.log(`${this.#nome} recebeu ${dano} de dano. vida restante ${this.#vida}`);
 }
}class assassino extends personagem {
 constructor(nome, nivel,vida, mana , furtividade) {
    super(nome, 'Assassino', nivel, vida, mana);
    this.furtividade = furtividade;
 }
 atacar( ) {
    console.log(`${this.nome} ataca silenciosamente com dano adicional pela furtividade!`);
 }
 usarFurtividade( ) {
    console.log(`${this.nome}usa sua furtividade de nivel ${this.furtividade} para se esconder`)
 }
} 
class Paladino extends personagem {
    constructor (nome, nivel, vida, mana , fe){
    super(nome, "Paladino", nivel, vida, mana);
    this.fe = fe;
    }
defesa() {
    defesa()
    {
        console.log(`${this.nome} se defendeu com o e4scudo sagrado, absorvendo mais dano com base na fé (${this.fe})`);

    }
    CSSNumericArray() 
    {
        console.log( `${this.nome} usa sua fé para curar a si mesmo ou aliados`);
    }
}
}
