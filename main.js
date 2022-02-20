function rand(min, max) {
  let mat = Math.floor(Math.random() * (max - min) ) + min;
  let x = mat.toString()
  return x
  
}
let cpfSemDigitos = ""

let d1 = rand(0, 9)
let d2 = rand(0, 9)
let d3 = rand(0, 9)
let d4 = rand(0, 9)
let d5 = rand(0, 9)
let d6 = rand(0, 9)
let d7 = rand(0, 9)
let d8 = rand(0, 9)
let d9 = rand(0, 9)

cpfSemDigitos = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9

let a = 1;
console.log(cpfSemDigitos)
// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
let soma = 0

class ValidaCPF{
  constructor(cpfSemDigitos){
    this.cpf = cpfSemDigitos 


  }

  geraNovoCpf() {
    //const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }


  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for(let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    console.log(digito)
    return digito <= 9 ? String(digito) : '0';
    
  }


  valida() {
   // if(!this.cpfLimpo) return false;
   // if(typeof this.cpfLimpo !== 'string') return false;
    //if(this.cpfLimpo.length !== 11) return false;
    //if(this.éSequência()) return false;
    this.geraNovoCpf();

    return true;
  }  
   
  


}
let cpf = new ValidaCPF(cpfSemDigitos)
if (cpf.valida()) {
  console.log('CPF válido');
  console.log(cpf.novoCPF)
} else {
  console.log('CPF inválido');
}