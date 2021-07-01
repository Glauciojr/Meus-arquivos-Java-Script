
let valores = [8,1,7,4,2,9]
/* forma tradicional

for( let pos = 0; pos < valores.length; pos++){

console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}    

 forma simplificada  */
 valores.sort()

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}