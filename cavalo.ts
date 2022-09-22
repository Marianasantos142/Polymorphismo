import { Animais } from "./animais";


class Cavalo extends Animais{

}
var cavalo = new Cavalo( "thor", 10, "pocoto")
cavalo.mostrarInformacoes()
cavalo.correr()