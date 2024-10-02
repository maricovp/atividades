// Classe base abstrata
class Personagem {
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    arma,
    magia,
    habilidadeEspecial
  ) {
    this._nome = nome;
    this._vida = vida;
    this._forca = forca;
    this._defesa = defesa;
    this._nivel = nivel;
    this._experiencia = experiencia;
    this._classe = classe;
    this._arma = arma;
    this._magia = magia;
    this._habilidadeEspecial = habilidadeEspecial;
  }

  // Métodos abstratos
  atacar(tipoAtaque) {
    throw new Error("Método abstrato 'atacar' deve ser implementado.");
  }

  defender() {
    throw new Error("Método abstrato 'defender' deve ser implementado.");
  }

  usarMagia() {
    throw new Error("Método abstrato 'usarMagia' deve ser implementado.");
  }

  ganharExperiencia(valor) {
    this._experiencia += valor;
    console.log(`${this._nome} ganhou ${valor} de experiência!`);
  }

  info() {
    return `Nome: ${this._nome}, Vida: ${this._vida}, Classe: ${this._classe}, Nível: ${this._nivel}, Experiência: ${this._experiencia}`;
  }

  // Getters e Setters
  get nome() {
    return this._nome;
  }
  set nome(value) {
    this._nome = value;
  }

  get vida() {
    return this._vida;
  }
  set vida(value) {
    this._vida = value;
  }

  get forca() {
    return this._forca;
  }
  set forca(value) {
    this._forca = value;
  }

  get defesa() {
    return this._defesa;
  }
  set defesa(value) {
    this._defesa = value;
  }

  get nivel() {
    return this._nivel;
  }
  set nivel(value) {
    this._nivel = value;
  }

  get experiencia() {
    return this._experiencia;
  }
  set experiencia(value) {
    this._experiencia = value;
  }

  get classe() {
    return this._classe;
  }
  set classe(value) {
    this._classe = value;
  }

  get arma() {
    return this._arma;
  }
  set arma(value) {
    this._arma = value;
  }

  get magia() {
    return this._magia;
  }
  set magia(value) {
    this._magia = value;
  }

  get habilidadeEspecial() {
    return this._habilidadeEspecial;
  }
  set habilidadeEspecial(value) {
    this._habilidadeEspecial = value;
  }
}

// Classe Guerreiro
class Guerreiro extends Personagem {
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    arma,
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
      "Guerreiro",
      arma,
      "",
      ""
    );
    this._armadura = armadura;
    this._potenciaAtaque = potenciaAtaque;
  }

  gritarGuerra() {
    console.log(`${this._nome} grita: "Para a batalha!"`);
  }

  atacar(tipoAtaque) {
    console.log(`${this._nome} ataca com ${tipoAtaque} usando ${this._arma}!`);
  }

  // Getters e Setters
  get armadura() {
    return this._armadura;
  }
  set armadura(value) {
    this._armadura = value;
  }

  get potenciaAtaque() {
    return this._potenciaAtaque;
  }
  set potenciaAtaque(value) {
    this._potenciaAtaque = value;
  }
}

// Classe Mago
class Mago extends Personagem {
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    arma,
    nivelMagia,
    elemento
  ) {
    super(nome, vida, forca, defesa, nivel, experiencia, "Mago", arma, "", "");
    this._nivelMagia = nivelMagia;
    this._elemento = elemento;
  }

  invocar() {
    console.log(`${this._nome} invoca a força do ${this._elemento}!`);
  }

  usarMagia() {
    console.log(
      `${this._nome} usa magia de nível ${this._nivelMagia} com ${this._elemento}!`
    );
  }

  // Getters e Setters
  get nivelMagia() {
    return this._nivelMagia;
  }
  set nivelMagia(value) {
    this._nivelMagia = value;
  }

  get elemento() {
    return this._elemento;
  }
  set elemento(value) {
    this._elemento = value;
  }
}

// Classe Arqueiro
class Arqueiro extends Personagem {
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    arma,
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
      "Arqueiro",
      arma,
      "",
      ""
    );
    this._tipoArco = tipoArco;
    this._precisao = precisao;
  }

  atirarFlecha() {
    console.log(
      `${this._nome} atira uma flecha com precisão ${this._precisao}!`
    );
  }

  info() {
    return `${super.info()}, Tipo de Arco: ${this._tipoArco}`;
  }

  // Getters e Setters
  get tipoArco() {
    return this._tipoArco;
  }
  set tipoArco(value) {
    this._tipoArco = value;
  }

  get precisao() {
    return this._precisao;
  }
  set precisao(value) {
    this._precisao = value;
  }
}

// Classe Ladino
class Ladino extends Personagem {
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    arma,
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
      "Ladino",
      arma,
      "",
      ""
    );
    this._habilidadeFurtiva = habilidadeFurtiva;
    this._agilidade = agilidade;
  }

  desaparecer() {
    console.log(`${this._nome} desaparece nas sombras!`);
  }

  defender() {
    console.log(`${this._nome} usa a defesa furtiva!`);
  }

  // Getters e Setters
  get habilidadeFurtiva() {
    return this._habilidadeFurtiva;
  }
  set habilidadeFurtiva(value) {
    this._habilidadeFurtiva = value;
  }

  get agilidade() {
    return this._agilidade;
  }
  set agilidade(value) {
    this._agilidade = value;
  }
}

// Exemplo de uso
const guerreiro = new Guerreiro(
  "Garen",
  100,
  20,
  15,
  1,
  0,
  "Espada",
  "Cota de malha",
  30
);
guerreiro.atacar("Corte Decisivo");
guerreiro.ganharExperiencia(50);
guerreiro.gritarGuerra();
console.log(guerreiro.info());

const mago = new Mago("Lux", 80, 10, 10, 1, 0, "Cajado", 5, "Luz");
mago.usarMagia();
mago.invocar();
console.log(mago.info());

const arqueiro = new Arqueiro(
  "Jhin",
  90,
  15,
  12,
  1,
  0,
  "Fuzil",
  "Arco longo",
  85
);
arqueiro.atirarFlecha();
console.log(arqueiro.info());

const ladino = new Ladino("Zed", 85, 12, 10, 1, 0, "Shuriken", "Sombras", 20);
ladino.desaparecer();
ladino.defender();
console.log(ladino.info());
