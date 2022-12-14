import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function criaHashComSal(senha){
    const sal = randomBytes(16).toString('hex')
    const senhaHasheada = scryptSync(senha,sal,64).toString('hex')
    return `${sal}:${senhaHasheada}`
}

class Usuario {
    constructor(nome, senha){
        this.nome = nome,
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }
    autentica(nome,senha){
        if(nome === this.nome){
            const testeHash = scryptSync(senha,this.sal,64)
            const hashReal = Buffer.from(this.hash, 'hex')

            const hashCorrespondem = timingSafeEqual(testeHash, hashReal)

            if(hashCorrespondem){
                console.log('Usuário Autenticado')
                return true
            }
        }
        console.log('Usuário ou senha incorretos')
        return false;
    }
}

const rn = new Usuario('Renan','Teste123')

console.log(rn)


rn.autentica('Renan','Teste123')
rn.autentica('Renan','Teste12')