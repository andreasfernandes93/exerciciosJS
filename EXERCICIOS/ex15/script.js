// Associando função ao evento de clicar no botão
btnenviar.addEventListener('click',verificar); 

function verificar() {

    // Pega a ano atual 
    var data = new Date();
    var anoAtual = data.getFullYear();

    // Associando elementos DOM a variaveis manipulaveis 
    var ano = document.querySelector('#ano');
    var resposta = document.querySelector('#resultado');
    
    // Criando condições verificar
    if (ano.value.length == 0 || ano.value > anoAtual){
        alert('Verifique os dados e tente novamente!')
    } else {
        // associa os itens selecionados pelo name radsex
        var sex = document.getElementsByName('radsex');
        //Calcula a idade do user (ano atual-ano nascimento) já convertendo a string em number
        var idade = anoAtual - Number(ano.value);
        // Cria var genero vazia
        var genero = ''
        // cria elemento img em html
        var img = document.createElement('img')
        // atribui id=foto para o elemento criado anteriormente
        img.setAttribute('id','foto')
        
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','foto-bebe-m.png')
            } else if ( idade < 21) {
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                img.setAttribute('src','foto-idoso-m.png')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','foto-bebe-f.png')
            } else if ( idade < 21) {
                img.setAttribute('src','foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src','foto-adulto-f.png')
            } else {
                img.setAttribute('src','foto-idoso-f.png')
            }
        }
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        // adiciona um elemento (elemento filho) ao objeto selecionado (obj.appendChild(elemento novo))
        resposta.appendChild(img)
    }
}