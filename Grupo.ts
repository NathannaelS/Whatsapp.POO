import {Mensagens} from"./Mensagens";
import {Usuario} from "./Usuario";
import {ControlWpp} from"./ControlWpp";

export class Grupo{

    private nome : string;
    private usuario : Array <Usuario>;
    private mensagens : Array <Mensagens>;

    public constructor (nome : string, usuario : Array <Usuario> = [], msg : Array <Mensagens> = []){
        this.nome = nome;
        this.mensagens = [];
        this.usuario = [];
    }

    public getNome ():string{
        return this.nome;
    }

    public setNome(nome:string):void {
        this.nome = nome;
    }

    public getUsuario () : Usuario[] {
        return this.usuario ;
    }

    public setUsuario (usuario : Usuario[]):void {
        this.usuario = usuario;
    } 

    public getMensagens () : Mensagens[]{
        return this.mensagens;
    }

    public setMensagens(mensagens : Mensagens[]):void{
        this.mensagens =  mensagens;
    } 

public buscarUsuario(nome:string):Usuario|undefined{
   for (let i of this.usuario){
       if (i.getNome()==nome){
           return i;
       }
   }
   return undefined;
}
}