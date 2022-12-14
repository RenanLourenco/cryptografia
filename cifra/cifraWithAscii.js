function cifrar(offset,mensagem){
    let resultado = ""
    for(let i = 0; i < mensagem.length; i++){
        let codLetraAscii = mensagem.charCodeAt(i);
        if(codLetraAscii >= 65 && codLetraAscii <= 90){
            let calculoOffset = ((codLetraAscii - 65 + offset) % 26) + 65;
            resultado += String.fromCharCode(calculoOffset);
        }else if(codLetraAscii >= 97 && codLetraAscii <= 122){
            let calculoOffset = ((codLetraAscii - 97 + offset) % 26) + 97;
            resultado += String.fromCharCode(calculoOffset);
        }else{
            resultado += String.fromCharCode(codLetraAscii);
        }
    }
    return resultado
}

function decode(offset, mensagem) {
    let resultado = "";
    for (let i = 0; i < mensagem.length; i++) {
      let codLetraAscii = mensagem.charCodeAt(i);
      if (codLetraAscii >= 65 && codLetraAscii <= 90) {
        let calculoOffset = ((codLetraAscii - 90 - offset) % 26) + 90;
        resultado += String.fromCharCode(calculoOffset);
      } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
        let calculoOffset = ((codLetraAscii - 122 - offset) % 26) + 122;
        resultado += String.fromCharCode(calculoOffset);
      } else {
        resultado += String.fromCharCode(codLetraAscii);
      }
  
    }
    return resultado;
  }

let mensagemUm = "banana"
let mensagemDois = "zumba"

let mensagemUmCifrada = cifrar(1, mensagemUm)
let mensagemDoisCifrada = cifrar(6,mensagemDois)

console.log(mensagemUmCifrada); //CBOBOB
console.log(mensagemDoisCifrada); //FASHG


// decifrar

let mensagemUmDecifrada = decode(1, mensagemUmCifrada)
let mensagemDoisDecifrada = decode(6,mensagemDoisCifrada)


console.log(mensagemUmDecifrada) // banana
console.log(mensagemDoisDecifrada) // zumba
