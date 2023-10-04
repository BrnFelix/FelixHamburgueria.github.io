/*let [cachorroquente, BauruSimples, BauruOvo, hamburguer, cheeseburguer, refrigerante] = [100,101,102,103,104,105]


for(let a=100;a<106;a++) {
    if (a += [cachorroquente, BauruSimples, BauruOvo, hamburguer, cheeseburguer, refrigerante] ) {
        console.log(`cachorroquente, BauruSimples, BauruOvo, hamburguer, cheeseburguer, refrigerante`)
    }
}
*/


let hamburgueria = {
   100: { nome: 'CachorroQuente', preco: 1.70 },
   101: {nome: 'BauruSimples', preco:  2.30 },
   102: {nome: 'BauruOvo', preco:  2.60 },
   103: {nome:'Hamburguer', preco:  2.40,},
   104: {nome: 'Cheeseburguer', preco: 2.50},
   105:{nome: 'Refrigerante', preco: 1.00}
}


let codigo = 100
let codigodois = 102
let lanche = hamburgueria[codigo]
let lanchedois = hamburgueria[codigodois]

if(lanche) {
    console.log(`Seu lanche foi o ${lanche.nome}`)
} else {
    console.log('Inválido!')
}

if(lanchedois) {
        console.log(`seu lanche foi o ${lanchedois.nome}`)
} else {
        console.log(`Inválido`)
    }


if(lanche, lanchedois) {
    console.log('Valor Total: $' + (lanche.preco + lanchedois.preco))
} else {
    console.log('Inválido')
}

