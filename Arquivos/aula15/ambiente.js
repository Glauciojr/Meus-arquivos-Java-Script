let num = [3, 2, 1, 4]
num.push(5)
num.sort()
console.log(`O nosso vetor é o ${num}`)

console.log(`o vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(10)
if (pos == -1){
    console.log('Nenhuma posição foi encontrada')
} else {
console.log(`O valor selecionado está na posição ${pos}`)
}