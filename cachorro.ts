import { Animais } from "./animais";


export class Cachorro extends Animais{

}
var cachorro = new Cachorro("maia", 4,"auauaua")
cachorro.mostrarInformacoes()
cachorro.correr()