import {Usuario} from "./usuario";
import { Grupo } from "./Grupo";
import { Mensagens } from "./Mensagens";
import {ControlWpp} from "./ControlWpp"

declare function require(msg: string) : any;
var readline = require('readline-sync');


let menu: boolean = true;
console.log ("Comandos= funcao");
while (menu){
    let opcao: string= readline.question("Informe opcao: ");
    switch (menu){
    
        case "/Usuario":
        let novouser : string = readline.question("Digite o nome do usuario");
        console.log((ControlWpp.addUsuarioGrupo));
    }

}