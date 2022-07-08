function carregar () {
    var ola =document.querySelector('#ola');
    var msg = document.querySelector('#msg');
    var foto = document.querySelector('#img');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}h${minuto}`

    if (hora >= 0 && hora < 12) {
        foto.src = 'manha.jpg'
        ola.innerHTML = 'Bom Dia!'
        
    } else if (hora >= 12 && hora <= 18){
        foto.src = 'tarde.jpg'
        ola.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#fd6949'
        
    } else  {
        foto.src = 'noite.jpg'
        ola.innerHTML = 'Boa Noite!'
        document.body.style.background = '#041622'
        
    }
}