export class Animais{
    
    nome: string;
    idade: number;
    som: string;


    constructor(nome: string, idade: number, som: string){
     this.nome = nome;
     this.idade = idade;
     this.som = som;
    }
    mostrarInformacoes(){
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nSom: ${this.som}`)
    }
    correr(){
        console.log("o animal está correndo")
    }
    subir(){
        console.log("o animal está subindo")
    }
}
