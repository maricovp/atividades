abstract class  Personagem {
    protected String nome;
    
    public personagem(String nome) {
        this.nome = nome;
}
public abstract void atacar();
public abstract void defender();
}
class Guerreiro extends Personagem {
    private string arma;

    public Guerreiro(string nome, string arma)  {
        super(nome);
        this.arma = arma;
    }

    @Override
    public void atacar() {
        System.out.println(nome + " atacou com a " + arma + "!");
    }
    
    @Override
    public void defender() {
        System.out.println(nome + "levanta o escudo para se defender !");
    }
    }
    