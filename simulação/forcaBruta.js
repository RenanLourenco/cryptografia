import { createHash } from "crypto";

class Usuario {
    constructor(nome,senha){
        this.nome = nome,
        this.senha = this.criaHash(senha)
    }
    criaHash(senha){
        return createHash('sha256').update(senha).digest('hex')
    }
    autentica(nome, senha){
        if(nome === this.nome && this.senha === this.criaHash(senha)){
            console.log('Usuario autenticado com sucesso')
            return true
        }
    }
    
}


const usuario = new Usuario('Renan Lourenço','1337')

for(let senhateste = 0;senhateste < 10000;senhateste++){
    if(usuario.autentica("Renan Lourenço", senhateste.toString())){
        console.log(`a senha do usuario é ${senhateste}`)
    }
}
