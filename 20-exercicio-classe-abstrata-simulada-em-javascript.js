class Jogo {
  #nome;
  #vida;
  #forca;
  #defesa;
  #nivel;
  #experiencia;
  #classe;
  #magia;
  #arma;
  #habilidadeEspecial;
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    magia,
    arma,
    habilidadeEspecial
  ) {
    if (new.target === Jogo) {
      throw new Error(
        "Não é possível instanciar a classe abstrata Jogo diretamente"
      );
    }
    this.#nome = nome;
    this.#vida = vida;
    this.#forca = forca;
    this.#defesa = defesa;
    this.#nivel = nivel;
    this.#experiencia = experiencia;
    this.#classe = classe;
    this.#magia = magia;
    this.#arma = arma;
    this.#habilidadeEspecial = habilidadeEspecial;
  }

  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  get forca() {
    return this.#forca;
  }
  set forca(forca) {
    this.#forca = forca;
  }
  get defesa() {
    return this.#defesa;
  }
  set defesa(defesa) {
    this.#defesa = defesa;
  }
  get vida() {
    return this.#vida;
  }
  set vida(vida) {
    this.#vida = vida;
  }
  get nivel() {
    return this.#nivel;
  }
  set nivel(nivel) {
    this.#nivel = nivel;
  }
  get experiencia() {
    return this.#experiencia;
  }
  set experiencia(experiencia) {
    this.#experiencia = experiencia;
  }
  get classe() {
    return this.#classe;
  }
  set classe(classe) {
    this.#classe = classe;
  }
  get magia() {
    return this.#magia;
  }
  set magia(magia) {
    this.#magia = magia;
  }
  get arma() {
    return this.#arma;
  }
  set arma(arma) {
    this.#arma = arma;
  }
  get habilidadeEspecial() {
    return this.#habilidadeEspecial;
  }
  set habilidadeEspecial(habilidadeEspecial) {
    this.#habilidadeEspecial = habilidadeEspecial;
  }
  atacar(...args) {
    throw new Error(
      "O método atacar() deve ser implementado pela classe derivada."
    );
  }

  defender() {
    throw new Error(
      "O método defender() deve ser implementado pela classe derivada."
    );
  }
  usarMagia() {
    throw new Error(
      "O método defender() deve ser implementado pela classe derivada."
    );
  }
  ganharExperiencia() {
    throw new Error(
      "O método ganharExperiencia() deve ser implementado pela classe derivada."
    );
  }
  info() {
    throw new Error(
      "O método info() deve ser implementado pela classe derivada."
    );
  }
}

class Guerreiro extends Jogo {
  #armadura;
  #potenciaAtaque;
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    magia,
    arma,
    habilidadeEspecial,
    armadura,
    potenciaAtaque
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      classe,
      magia,
      arma,
      habilidadeEspecial
    );
    this.#armadura = armadura;
    this.#potenciaAtaque = potenciaAtaque;
  }
  get armadura() {
    return this.#armadura;
  }
  set armadura(armadura) {
    this.#armadura = armadura;
  }
  get potenciaAtaque() {
    return this.#potenciaAtaque;
  }
  set potenciaAtaque(potenciaAtaque) {
    this.#potenciaAtaque = potenciaAtaque;
  }

  gritarGuerra() {
    console.log(
      `${this.nome} realiza um poderoso grito fazendo com que seus inimigos se intimidem`
    );
  }

  atacar(...args) {
    if (args.length === 0) {
      console.log(`${this.nome} realiza um ataque rapido!`);
    } else if (args.length === 1) {
      const arma = args[0];
      console.log(`${this.nome} ataca com ${arma}!`);
    } else if (args.length === 2) {
      const [tipoMagia, comMana] = args;
      if (comMana) {
        console.log(`${this.nome} dispara ${tipoMagia} com sua mana!`);
      } else {
        console.log(`${this.nome} dispara ${tipoMagia} sem mana`);
      }
    } else {
      console.log("Número de argumentos não suportado.");
    }
  }
}

class Mago extends Jogo {
  #nivelMagia;
  #elemento;
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    magia,
    arma,
    habilidadeEspecial,
    nivelMagia,
    elemento
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      classe,
      magia,
      arma,
      habilidadeEspecial
    );
    this.#nivelMagia = nivelMagia;
    this.#elemento = elemento;
  }
  get nivelMagia() {
    return this.#nivelMagia;
  }
  set nivelMagia(nivelMagia) {
    this.#nivelMagia = nivelMagia;
  }
  get elemento() {
    return this.#elemento;
  }
  set elemento(elemento) {
    this.#elemento = elemento;
  }

  invocar() {
    console.log(
      `${this.nome} invoca varios mortos-vivos que começam a correr loucamente em seu inimigo`
    );
  }

  usarMagia(dano) {
    this.vida -= dano;
    console.log(`${this.nome} realiza ${dano} de dano em seu inimigo`);
  }
}

class Arqueiro extends Jogo {
  #tipoArco;
  #precisao;
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    magia,
    arma,
    habilidadeEspecial,
    tipoArco,
    precisao
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      classe,
      magia,
      arma,
      habilidadeEspecial
    );
    this.#tipoArco = tipoArco;
    this.#precisao = precisao;
  }
  get tipoArco() {
    return this.#tipoArco;
  }
  set tipoArco(tipoArco) {
    this.#tipoArco = tipoArco;
  }
  get precisao() {
    return this.#precisao;
  }
  set precisao(precisao) {
    this.#precisao = precisao;
  }
  atirarFlecha() {
    console.log(
      `${this.nome} destruiu varios inimigo com sua poderosa flecha em seu arco`
    );
  }

  info() {
    console.log(`${this.nome}`);
    console.log(`${this.vida}`);
    console.log(`${this.forca}`);
    console.log(`${this.defesa}`);
    console.log(`${this.nivel}`);
    console.log(`${this.experiencia}`);
    console.log(`${this.classe}`);
    console.log(`${this.magia}`);
    console.log(`${this.arma}`);
    console.log(`${this.habilidadeEspecial}`);
    console.log(`${this.tipoArco}`);
    console.log(`${this.precisao}`);
  }
}

class Ladino extends Jogo {
  #habilidadeFurtiva;
  #agilidade;
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    magia,
    arma,
    habilidadeEspecial,
    habilidadeFurtiva,
    agilidade
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      classe,
      magia,
      arma,
      habilidadeEspecial
    );
    this.#habilidadeFurtiva = habilidadeFurtiva;
    this.#agilidade = agilidade;
  }
  get habilidadeFurtiva() {
    return this.#habilidadeFurtiva;
  }
  set habilidadeFurtiva(habilidadeFurtiva) {
    this.#habilidadeFurtiva = habilidadeFurtiva;
  }
  get agilidade() {
    return this.#agilidade;
  }
  set agilidade(agilidade) {
    this.#agilidade = agilidade;
  }
  desaparecer() {
    console.log(`${this.nome} desaparece com sua incrivel furtividade`);
  }

  defender() {
    console.log(`${this.nome} realiza uma defesa com seu escudo abençoado`);
  }
}

const guerreiro = new Guerreiro(
  "guerreiro",
  100,
  70,
  50,
  10,
  50,
  45,
  20,
  10,
  30,
  0,
  50,
  20
);
guerreiro.gritarGuerra();
guerreiro.atacar(30);

const mago = new Mago("mago", 100, 30, 50, 20, 40, 15, 25, 40, 35, 0, 50, 10);
mago.invocar();
mago.usarMagia(40);

const arqueiro = new Arqueiro(
  "arqueiro",
  100,
  10,
  30,
  80,
  100,
  20,
  0,
  "arco",
  "flechaDivina",
  "flamejante",
  100
);
arqueiro.atirarFlecha();
arqueiro.info();

const ladino = new Ladino("ladino", 100, 60, 40, 10, 50, 30, 20, 15, 50, 0, 80);
ladino.desaparecer();
ladino.defender();

console.log("----------------------------------------------------------------");
console.log("Modificando os objetos usando setters:");
console.log("----------------------------------------------------------------");

//Modificando o objeto guerreiro usando setters
guerreiro.nome = "Thorfinn";
console.log(`Nome modificado: ${guerreiro.nome}`);
guerreiro.atacar(30);

//Modificando o objeto arqueiro usando setters

arqueiro.nome = "Hakuna Matata";
console.log(`Nome modificado: ${arqueiro.nome}`);
arqueiro.atirarFlecha();

//Modificando o objeto ladino usando setters

ladino.nome = "Thunderbolt";
console.log(`Nome modificado: ${ladino.nome}`);
ladino.defender();

//Modificando o objeto mago usando setters

mago.nome = "Lumina";
console.log(`Nome modificado: ${mago.nome}`);
mago.usarMagia(60);
