import {Usuario} from "./Usuario";
import {Grupo} from "./Grupo";
import {Mensagens} from "./Mensagens";

export class ControlWpp{
    static buscarMensagensNovas(pessoa: any, string: any, usuario : any, grupo : any): any {
        throw new Error("Method not implemented.");
    }
    private usuario = Usuario;
    private grupo = Grupo;
    private pessoa : string;

    public constructor (usuario :Array<Usuario>, grupo:Array<Grupo>){
        this.usuario = Usuario[] ;
        this.grupo = Grupo[];
    }


    public addUsuario(nome:string):boolean{
        if(this.buscarUsuario(nome)!= undefined){
            return false;
        }else{
            this.usuario.push(new usuario(nome));
            return true;
        }
}

    public buscarUsuario(nome:string):Usuario|undefined{
        for (let i of this.usuario){
            if (i.getNome()==nome){
                return i;
            }
        }
        return undefined;
    }

    public buscarGrupo(nome:string):Grupo|undefined{
        for(let i of this.grupo){
            if (i.getNome()==nome){
                return i;
            }
        }
        return undefined;

}
    public addGrupo(nome:string):boolean{
        if(this.buscarGrupo(nome)!=undefined){
            return false;
        }else{
            this.grupo.push(new Grupo(nome));
            return true;
    }    
}
public addUserGrupo(adm:string,pessoa:string, grupo:string) : number{
    let a: Usuario = this.buscarUsuario(adm);
    let p: Usuario = this.buscarUsuario(pessoa);
    let g: Grupo = this.buscarGrupo(grupo);
    
    if(a== undefined){
        return 1; //adm nao existe

    }else if(p == undefined){
        return 2; //pessoa nao existe
    }else if(g==undefined){
        return 3; //grupo nao existe
    }else if (g.buscarUsuario(pessoa) != undefined){
        return 4; //Pessoa nao existe no grupo
    }else if (g.buscarUsuario(adm)==undefined){
        return 5;//admin nao esta no grupo
    }
else{
    g.getUsuario().push(p);
    p.getGrupo().push(g);
    return 0; //com sucesso
}
}

    public enviarMensagem(text : string, pessoa : string ,grupo : string) : number{
    let p:Usuario = this.buscarUsuario(pessoa);
    let g:Grupo = this.buscarGrupo(grupo);
    if (p==undefined){
        return 1;//pessoa n existe
    }else if(g==undefined){
        return 2;//grupo nao existe
    }else if (g.buscarUsuario(pessoa)==undefined){
        return 3;//pessoa n esta no grupo
    }else{
        g.getMensagens().push(new mensagens( p, text));
        return 0;//mensangem enviada
    }
} 

    public buscarMensagensNovas (pessoa : string, grupo : string) : Mensagens[] {
        let p: Usuario = this.buscarUsuario(pessoa);
        let g: Grupo = this.buscarGrupo(grupo);
        let res : Mensagens[] = [];
        if(p== undefined){
      console.log("pessoa nao existe");
}   
          else if(g==undefined){
        console.log("grupo nao existe");
}   
    else if (g.buscarUsuario(pessoa) == undefined){
        console.log("Pessoa nao esta no grupo");
}   else{
        for (let m of g.getMensagens(){
        if (m.buscarLeitores(pessoa) == undefined){
        res.push(m);
        m.getLeitores().push(p);
    }
}

return res;
}
    }
    
