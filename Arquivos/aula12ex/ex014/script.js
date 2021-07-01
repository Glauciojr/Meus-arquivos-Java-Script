function carregar () {
let msg = document.querySelector('div#msg')
let img = document.querySelector('img#imagem')
let data = new Date()
let hora = 21
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora <12) {
    img.src = 'manha editado.png'
    document.body.style.background = "yellow"
} else if ( hora >=12 && hora <=18) {
    img.src = 'tarde editado.png'
    document.body.style.background = "green"
} else {
    img.src = 'noite editado.png'
    document.body.style.background = "black"
    
        
}
}