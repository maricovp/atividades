class Personagem {
  #nome;
  #classe;
  #nivel;
  #vida;
  #mana;
  #forca;
  #agilidade;
  #inteligencia;
  #resistencia;
  #sabedoria;

  constructor(
    nome,
    classe,
    nivel,
    vida,
    mana,
    forca,
    agilidade,
    inteligencia,
    resistencia,
    sabedoria
  ) {
    this.#nome = nome;
    this.#classe = classe;
    this.#nivel = nivel;
    this.#vida = vida;
    this.#mana = mana;
    this.#forca = forca;
    this.#agilidade = agilidade;
    this.#inteligencia = inteligencia;
    this.#resistencia = resistencia;
    this.#sabedoria = sabedoria;
  }

  // Métodos Getters e Setters
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

  get forca() {
    return this.#forca;
  }
  set forca(forca) {
    this.#forca = forca;
  }

  get agilidade() {
    return this.#agilidade;
  }
  set agilidade(agilidade) {
    this.#agilidade = agilidade;
  }

  get inteligencia() {
    return this.#inteligencia;
  }
  set inteligencia(inteligencia) {
    this.#inteligencia = inteligencia;
  }

  get resistencia() {
    return this.#resistencia;
  }
  set resistencia(resistencia) {
    this.#resistencia = resistencia;
  }

  get sabedoria() {
    return this.#sabedoria;
  }
  set sabedoria(sabedoria) {
    this.#sabedoria = sabedoria;
  }

  // Métodos
  atacar() {
    console.log(`${this.#nome} realizou um ataque normal!`);
  }

  defesa() {
    console.log(
      `${this.#nome} se defendeu com ${this.#resistencia} pontos de defesa.`
    );
  }

  receberDano(dano) {
    this.#vida -= dano;
    console.log(
      `${this.#nome} recebeu ${dano} de dano. Vida restante: ${this.#vida}`
    );
  }
}

class Guerreiro extends Personagem {
  constructor(
    nome,
    nivel,
    vida,
    mana,
    forca,
    agilidade,
    inteligencia,
    resistencia,
    sabedoria,
    habilidades
  ) {
    super(
      nome,
      "Guerreiro",
      nivel,
      vida,
      mana,
      forca,
      agilidade,
      inteligencia,
      resistencia,
      sabedoria
    );
    this.habilidades = habilidades; // Habilidades específicas
  }

  atacar() {
    console.log(
      `${this.nome} ataca com uma espada, causando ${this.forca * 2} de dano!`
    );
  }

  usarHabilidade() {
    console.log(`${this.nome} usa a habilidade: ${this.habilidades[0]}!`);
  }
}

class Mago extends Personagem {
  constructor(
    nome,
    nivel,
    vida,
    mana,
    forca,
    agilidade,
    inteligencia,
    resistencia,
    sabedoria,
    magia
  ) {
    super(
      nome,
      "Mago",
      nivel,
      vida,
      mana,
      forca,
      agilidade,
      inteligencia,
      resistencia,
      sabedoria
    );
    this.magia = magia; // Habilidade mágica específica
  }

  atacar() {
    console.log(
      `${this.nome} lança um feitiço causando ${this.inteligencia * 2} de dano!`
    );
  }

  usarMagia() {
    console.log(`${this.nome} conjura ${this.magia}!`);
  }
}

class Arqueiro extends Personagem {
  constructor(
    nome,
    nivel,
    vida,
    mana,
    forca,
    agilidade,
    inteligencia,
    resistencia,
    sabedoria,
    flechas
  ) {
    super(
      nome,
      "Arqueiro",
      nivel,
      vida,
      mana,
      forca,
      agilidade,
      inteligencia,
      resistencia,
      sabedoria
    );
    this.flechas = flechas; // Flechas disponíveis
  }

  atacar() {
    console.log(
      `${this.nome} atira uma flecha, causando ${this.agilidade * 2} de dano!`
    );
  }

  usarFlecha() {
    if (this.flechas > 0) {
      this.flechas--;
      console.log(
        `${this.nome} usou uma flecha. Flechas restantes: ${this.flechas}`
      );
    } else {
      console.log(`${this.nome} não tem flechas restantes!`);
    }
  }
}

class Sacerdote extends Personagem {
  constructor(
    nome,
    nivel,
    vida,
    mana,
    forca,
    agilidade,
    inteligencia,
    resistencia,
    sabedoria,
    fe
  ) {
    super(
      nome,
      "Sacerdote",
      nivel,
      vida,
      mana,
      forca,
      agilidade,
      inteligencia,
      resistencia,
      sabedoria
    );
    this.fe = fe; // Fé, atributo específico
  }

  defesa() {
    console.log(
      `${this.nome} se defendeu com a proteção divina, absorvendo ${
        this.fe * 1.5
      } pontos de dano!`
    );
  }

  curar() {
    console.log(
      `${this.nome} usa sua fé para curar ${this.fe} pontos de vida!`
    );
  }
}

// Criando instâncias das classes derivadas
const guerreiro = new Guerreiro("Olaf", 15, 150, 30, 20, 10, 5, 15, 8, [
  "Corte Poderoso",
]);
guerreiro.atacar();
guerreiro.usarHabilidade();

const mago = new Mago(
  "Janna",
  12,
  100,
  80,
  5,
  10,
  25,
  8,
  15,
  "Tempestade Mágica"
);
mago.atacar();
mago.usarMagia();

const arqueiro = new Arqueiro("Ember", 10, 120, 50, 10, 20, 8, 10, 5, 5);
arqueiro.atacar();
arqueiro.usarFlecha();
arqueiro.usarFlecha(); // Usando uma flecha a mais

const sacerdote = new Sacerdote("Seraphine", 14, 90, 100, 5, 8, 20, 12, 10, 25);
sacerdote.defesa();
sacerdote.curar();

// Modificando atributos usando setters
console.log("--------------------------------------------------------");
console.log("Modificando atributos usando setters:");
console.log("--------------------------------------------------------");

guerreiro.nome = "Olaf";
console.log(`Nome modificado: ${guerreiro.nome}`);
guerreiro.atacar();

mago.vida = 110;
console.log(`Vida modificada: ${mago.vida}`);
mago.defesa();

arqueiro.mana = 60;
console.log(`Mana modificada: ${arqueiro.mana}`);

sacerdote.vida = 95; // Modificando vida do sacerdote
console.log(`Vida do sacerdote modificada: ${sacerdote.vida}`);
sacerdote.defesa();
