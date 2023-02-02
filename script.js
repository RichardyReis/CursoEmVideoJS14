function carregar () {
    
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var cumprimento = window.document.getElementById('saudacao');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;
    
    if (hora >= 6 && hora < 12) {
        
        img.src = 'Img/Manha.jpg';
        window.document.body.style.background = 'rgba(232, 236, 150, 0.909)';
        cumprimento.innerHTML = ('Bom dia!');

    } else if (hora >= 12 && hora < 18) {
        
        img.src = 'Img/Tarde.jpg';
        window.document.body.style.background = 'rgba(17, 209, 239, 0.909)';
        cumprimento.innerHTML = ('Boa tarde!');

    } else {
        
        img.src = 'Img/Noite.jpg';
        window.document.body.style.background = 'rgba(1, 48, 135, 0.909)';
        cumprimento.innerHTML = ('Boa noite!');

    }
}