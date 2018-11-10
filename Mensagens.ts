import {Usuario} from "./Usuario";

export class Mensagens{
    private emitente:Usuario;
    private text:string;
    private leitores:Array<Usuario>;

    public constructor(emitente:Usuario,text:string,leitores:Array<Usuario>){
        this.emitente = emitente;
        this.text = text;
        this.leitores = [];
    }

    public getEmitente():Usuario{
        return this.emitente
    }
    public setEmitente(emitente:Usuario):void{
        this.emitente = emitente;
    }

    public getText():string{
        return this.text;
    }
    public setText(text:string):void{
        this.text = text;
    }

    public getLeitores():Array<Usuario>{
        return this.leitores;
    }
    public setLeitores(leitores:Array<Usuario>):void{
        this.leitores = Array<Usuario>;
    }

    public buscarLeitores(nome:string): Usuario | undefined{
        for(let i of this.leitores){
            if (i.getNome() == nome){
                return i;
            }
        }
    }
}