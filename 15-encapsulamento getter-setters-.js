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
}