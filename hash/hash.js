import { createHash } from "crypto";

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}


class Usuario {
    constructor(nome,senha){
        this.nome = nome,
        this.senha = criaHash(senha)
    }
    
    autentica(nome, senha){
        if(nome === this.nome && this.senha === criaHash(senha)){
            console.log('Usuario autenticado com sucesso')
            return true
        }else{
            console.log('senha incorreta')
            return false
        }
    }
}


const usuario = new Usuario('Renan Lourenço','senhafoda')

console.log(usuario)

usuario.autentica('Renan Lourenço','senhafoda')