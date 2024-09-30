class Personagem {
    constructor(nome) {
        if (new target === Personagem) {
        throw new Error ("Não é possivel instanciar a classe abstrata Personagem diretamente");
        this.nome = nome;
    }
}

atacar ( ) {
    throw new Error ("Método atacar, deve ser implementado pela classe derivada");

}
defender ( ) {

    throw new Error ("Método defender, deve ser implementado pela classe derivada");
}
}
    class Guerreiro extends Personagem {
    constructor(nome,arma) {
        super(nome);
        this.arma = arma;
        
    }
    atacar ( ) {
        console.log(`${this.nome} ataca com ${this.arma}`);
    }
    defender ( ) {
        console.log(`${this.nome} utiliza o escudo para se defender}`);
    }
 }
