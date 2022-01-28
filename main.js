/*Aplicando scrollreveal*/

window.sr = ScrollReveal({ reset: true});

sr.reveal('.info-body', {
    duration: 5000
});

sr.reveal('.developer-img', {
    duration: 7000
});


sr.reveal('.h1-eu', {
    duration: 5000
});

sr.reveal('.paragrafo-eu', {
    duration: 6000
});

sr.reveal('.minhafoto', {
    duration: 6000
});


sr.reveal('.container-quemsou', {duration: 5000})


sr.reveal('.card1', {
    duration: 4000
})

sr.reveal('.card2', {
    duration: 5000
})


sr.reveal('.card3', {
    duration: 7000
})


sr.reveal('.container-skills', {
    duration: 5000
});

sr.reveal('.html', {
    rotate: {x: 50, y: 100, z: 0},
    duration: 3000
});

sr.reveal('.css', {
    rotate: {x: 50, y: 100, z: 0},
    duration: 3000
});

sr.reveal('.js', {
    rotate: {x: 50, y: 100, z: 0},
    duration: 4000
});

sr.reveal('.python', {
    rotate: {x: 50, y: 100, z: 0},
    duration: 4000
});

sr.reveal('.github', {
    rotate: {x: 50, y: 100, z: 0},
    duration: 5000
});

sr.reveal('.git', {
    rotate: {x: 50, y: 100, z: 0},
    duration: 5000
});


var paragrafo = window.document.getElementById('paragrafo-skills');

var paragrafo2 = "*Passe o cursor nos icones para ler*"

window.document.querySelector(".html").addEventListener('mouseover', function() {
    paragrafo.innerHTML = "Linguagem de Marcação de Hipertexto,  o HTML é o componente base da web. <br> Isso quer dizer que ele permite a construção de websites e a inserção <br> de novos conteúdos."
    
})
        /*Essa função dispara quando o cursor sai do icone*/
window.document.querySelector('.html').addEventListener('mouseout', function() {
    paragrafo.innerHTML = paragrafo2
})


window.document.querySelector(".css").addEventListener('mouseover', function() {
    paragrafo.innerHTML = "O Cascading Style Sheets (CSS) é uma folha de estilo composta por “camadas” <br> e utilizada para definir a apresentação (aparência) em páginas da internet. "
})


window.document.querySelector('.css').addEventListener('mouseout', function() {
    paragrafo.innerHTML = paragrafo2
})


window.document.querySelector('.js').addEventListener('mouseover', function() {
    paragrafo.innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto <br> nível com tipagem dinâmica fraca e multiparadigma."
})

window.document.querySelector('.js').addEventListener("mouseout", function() {
    paragrafo.innerHTML = paragrafo2
})


window.document.querySelector('.python').addEventListener('mouseover', function() {
    paragrafo.innerHTML = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa <br> orientada a objetos, funcional, de tipagem dinâmica e forte."
})

window.document.querySelector('.python').addEventListener('mouseout', function() {
    paragrafo.innerHTML = paragrafo2
})


window.document.querySelector('.github').addEventListener('mouseover', function() {
    paragrafo.innerHTML = "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de <br> versão usando o Git. "
})

window.document.querySelector('.github').addEventListener('mouseout', function() {
    paragrafo.innerHTML = paragrafo2
})


window.document.querySelector('.git').addEventListener('mouseover', function() {
    paragrafo.innerHTML = "Git é um sistema de controle de versões distribuído, usado principalmente no <br> desenvolvimento de software. "
})

window.document.querySelector('.git').addEventListener('mouseout', function() {
    paragrafo.innerHTML = paragrafo2
})