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


const usuario = new Usuario('Renan Lourenço','senha123')

// código omitido

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

senhasComuns.map(senha => {
    if(usuario.autentica('Renan Lourenço', senha)){
        console.log(`a senha do usuário é: ${senha}`)
    }
})
