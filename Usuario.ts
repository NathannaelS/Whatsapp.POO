import {Mensagens} from "./Mensagens";
import {Grupo} from "./Grupo";

export class Usuario{
    private grupo:Array <Grupo>;
    private mensagens:Array <Mensagens>;
    private nome:string;

    public constructor (grupo:Array<Grupo>,mensagens:Array<Mensagens>,nome:string){
        this.grupo = [];
        this.mensagens = [];
        this.nome = nome;

    }

    public getGrupo():Array<Grupo>{
        return this.grupo;
    }
    public setGrupo(grupo:Array<Grupo>):void{
        this.grupo = grupo;
    }

    public getMensagens():Array<Mensagens>{
        return this.mensagens;
    }
    public setMensagens(grupo:Array<Mensagens>):void{
        this.mensagens = mensagens;
    }

    public getNome():string{
        return this.nome;
    }
    public setNome(nome:string){
        this.nome = nome;
    }

}