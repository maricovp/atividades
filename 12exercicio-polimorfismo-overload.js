class Campeao {
  constructor(
    nome,
    classe,
    nivel,
    vida,
    mana,
    ataque,
    defesa,
    velocidade,
    habilidade,
    critico,
    experiencia
  )
   {
    this.nome = nome;
    this.classe = classe;
    this.nivel = nivel;
    this.vida = vida;
    this.mana = mana; 
    this.ataque = ataque; 
    this.defesa = defesa;
    this.velocidade = velocidade;
    this.habilidade = habilidade;
    this.critico = critico;  
    this.experiencia = experiencia; 
  }

  
  atacar(inimigo) 
  {
    console.log(
      `${this.nome} ataca ${inimigo.nome} causando ${this.ataque} de dano.`
    );
    inimigo.vida -= this.ataque;
    console.log(`${inimigo.nome} agora tem ${inimigo.vida} de vida.`);
  }

  
  Habilidade() 
  {
    console.log(`${this.nome} usa ${this.habilidade}!`);
  }

  
  manacusto(custoMana) 
  {
    if (this.mana >= custoMana) {
      this.mana -= custoMana;
      console.log(
        `${this.nome} usa ${this.habilidade} consumindo ${custoMana} de mana!`
      );
    } else {
      console.log(
        `${this.nome} não tem mana suficiente para usar ${this.habilidade}.`
      );
    }
  }

  
  ganharExperiencia(pontos)
   {
    this.experiencia += pontos;
    console.log(`${this.nome} ganhou ${pontos} de experiência.`);
    this.verificarNivel();
  }

  
  bonusExperiencia(pontos, bonus = 0)
   {
    this.experiencia += pontos + bonus;
    console.log(
      `${this.nome} ganhou ${pontos} de experiência${
        bonus > 0 ? ` + ${bonus} de bônus` : ""
      }.`
    );
    this.verificarNivel();
  }
  verificarNivel() 
  {
    while (this.experiencia >= 100) {
      this.nivel += 1;
      this.experiencia -= 100; 
      console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
    }
  }
  curar(quantidade)
   {
    this.vida += quantidade;
    console.log(
      `${this.nome} se cura em ${quantidade} pontos de vida. Vida atual: ${this.vida}.`
    );
  }
}
const yasuo = new Campeao(
  "Yasuo",
  "Lutador",
  1,100,50, 20,75,5,
  "Tempestade de Aço",
  0.2,0
);
const ahri = new Campeao(
  "Ahri",
  "Mago",
  1,90,500,15,8,6,
  "Encantamento",
  0.25,0
);
const inimigo = { nome: "ahri", vida: 50 };


yasuo.atacar(inimigo);
yasuo.Habilidade(10); 
yasuo.ganharExperiencia(60);
yasuo.ganharExperiencia(60, 10);
yasuo.curar(20);
ahri.atacar(inimigo);
ahri.Habilidade(20); 
ahri.ganharExperiencia(80);
ahri.ganharExperiencia(30);
ahri.curar(15);


const garen= new Campeao(
  "garen",
  "tanque",
  1,
  1000,
  100,
  15,
  700,
  5,
  "DEMACIA",
  0.22,300
);
const tanque = { nome: "garen", vida: 1000 };


yasuo.atacar(tanque);
yasuo.Habilidade(100000000000000000000000);
yasuo.ganharExperiencia(60);
yasuo.ganharExperiencia(60, 10);
yasuo.curar(20);
ahri.atacar(yasuo);
ahri.Habilidade(20);
ahri.ganharExperiencia(80);
ahri.ganharExperiencia(30);
ahri.curar(15);
yasuo.atacar(inimigo);
yasuo.Habilidade(10);
yasuo.ganharExperiencia(60);
yasuo.ganharExperiencia(60, 10);
yasuo.curar(20);
ahri.atacar(tanque);
ahri.Habilidade(20);
ahri.ganharExperiencia(80);
ahri.ganharExperiencia(30);
ahri.curar(15);
ahri.curar(15);
ahri.curar(15);