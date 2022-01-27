var paragrafo = window.document.getElementById('paragrafo-skills');

var paragrafo2 = "*Passe o cursor nos icones para ler*"

window.document.querySelector(".html").addEventListener('mouseover', function() {
    paragrafo.innerHTML = "Sigla para HyperText Markup Language — Linguagem de Marcação de Hipertexto, <br>  o HTML é o componente base da web. <br> Isso quer dizer que ele permite a construção de websites e a inserção <br> de novos conteúdos, como imagens e vídeos, por meio dos hipertextos."
    
})
        /*Essa função dispara quando o cursor sai do icone*/
window.document.querySelector('.html').addEventListener('mouseout', function() {
    paragrafo.innerHTML = paragrafo2
})


window.document.querySelector(".css").addEventListener('mouseover', function() {
    paragrafo.innerHTML = "O Cascading Style Sheets (CSS) é uma folha de estilo composta por “camadas” <br> e utilizada para definir a apresentação (aparência) em páginas da internet que <br> adotam para o seu desenvolvimento linguagens de marcação <br>(como XML, HTML e XHTML). "
})


window.document.querySelector('.css').addEventListener('mouseout', function() {
    paragrafo.innerHTML = paragrafo2
})


window.document.querySelector('.js').addEventListener('mouseover', function() {
    paragrafo.innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto <br> nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o <br> JavaScript é uma das três principais tecnologias da World Wide Web."
})

window.document.querySelector('.js').addEventListener("mouseout", function() {
    paragrafo.innerHTML = paragrafo2
})


window.document.querySelector('.python').addEventListener('mouseover', function() {
    paragrafo.innerHTML = "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa <br> orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van <br> Rossum em 1991."
})

window.document.querySelector('.python').addEventListener('mouseout', function() {
    paragrafo.innerHTML = paragrafo2
})


window.document.querySelector('.github').addEventListener('mouseover', function() {
    paragrafo.innerHTML = "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de <br> versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário <br> cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer <br> lugar do mundo."
})

window.document.querySelector('.github').addEventListener('mouseout', function() {
    paragrafo.innerHTML = paragrafo2
})


window.document.querySelector('.git').addEventListener('mouseover', function() {
    paragrafo.innerHTML = "Git é um sistema de controle de versões distribuído, usado principalmente no <br> desenvolvimento de software, mas pode ser usado para registrar o histórico de <br> edições de qualquer tipo de arquivo. "
})

window.document.querySelector('.git').addEventListener('mouseout', function() {
    paragrafo.innerHTML = paragrafo2
})