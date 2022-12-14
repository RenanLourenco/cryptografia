import jwt from 'jsonwebtoken'

const chaveSecreta = 'teste'

const token = jwt.sign(
    {
        apelido:'Renan',
        curso:'node segurança e node js'
    }, chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)
