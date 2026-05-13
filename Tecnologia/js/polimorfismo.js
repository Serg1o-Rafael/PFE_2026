// Class PET
class Pet {
 
    // CONSTRUTOR -> atributos
    constructor(nome) {
        this.nome = nome    // this se refere a classe corrente (em que estou), que neste caso é a classe PET
    }
 
    // MÉTODO
    emitirSom(){
        console.log("O Animal faz um som.")
    }
}
 
// CLASSE FILHA HERDANDO DE PET
class Cachorro extends Pet {   // CLASSE CACHORRO VAI HERDAR OS ATRIBUTOS E O MÉTODO DA CLASSE PET
 
    // POLIMORFISMO: É Quando diferentes classes (cachorro e gato) possuem o mesmo método, mas cada uma executa de forma diferente.
    emitirSom() {
        console.log(this.nome + " faz: Au Au!")
    }
}
 
// OUTRA CLASSE FILHA QUE HERDA DE PET
class Gato extends Pet {
 
    // POLIMORFISMO
    emitirSom() {
        console.log(this.nome + " faz: Miau!")
    }
}
 
// CRIANDO OBJETOS
const dog = new Cachorro("Rex")
const cat = new Gato("Mingau")
 
// CHAMANDO MÉTODOS
dog.emitirSom()
cat.emitirSom()
 