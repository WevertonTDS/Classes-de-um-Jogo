// Criando a classe generica Heroi
class Heroi {
    // Construtor da classe, recebe o nome, a idade e o tipo do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar, exibe a mensagem conforme o tipo do herói
    atacar() {
      // Criando uma variável para armazenar o ataque
      let ataque;
      // Usando uma estrutura de decisão switch para definir o ataque conforme o tipo
      switch (this.tipo) {
        case "mago":
          ataque = "Magia";
          break;
        case "guerreiro":
          ataque = "Espada";
          break;
        case "monge":
          ataque = "Artes Marciais";
          break;
        case "ninja":
          ataque = "Shuriken";
          break;
        default:
          ataque = "não tem ataque definido";
      }
      // Exibindo a mensagem usando o operador de concatenação (+)
      console.log("o " + this.tipo + " atacou usando " + ataque);
    }
  }
  
  // Criando alguns objetos da classe Heroi usando o operador new
  let heroi1 = new Heroi("Weverton", 25, "guerreiro");
  let heroi2 = new Heroi("Cristiana", 18, "maga");
  let heroi3 = new Heroi("Nycolle", 32, "monge");
  let heroi4 = new Heroi("Alice", 21, "ninja");
  
  // Criando um array com os objetos criados usando colchetes
  let herois = [heroi1, heroi2, heroi3, heroi4];
  
  // Usando um laço de repetição for para percorrer o array e chamar o método atacar de cada objeto
  for (let heroi of herois) {
    heroi.atacar();
  }