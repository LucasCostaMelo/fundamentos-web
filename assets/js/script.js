/*
case sensitive=reconhece  letras maiuculas e minusculas para as palavras reservadas dessa linguagem
por tag:getElementByTagName()
por Id:getElementsById()
por Nome:getElementsByName()
por Classe:getElementsByClassName()
por Seletor:querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false

nome.style.width = "100%"
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
     if (nome.value.length < 3) {
    txt.innerHTML = 'Nome Inválido'
    txt.style.color = "red"
     }
     else {
         txt.innerHTML = "Nome válido"
         txt.style.color = "green"
        nomeOK = true
     }
     
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
      }
      else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOK = true
      }
}
 
function validaAssunto () {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no maximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else {
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}
function enviar() {
    if(nomeOK == true && emailOK == true && assuntoOK == true) {
        alert ('Formulario enviado com sucesso!')
    }
    else{
        alert('Preencha o formulario corretamente  antes de enviar...')
    }
}
function mapazoom() {

}
function mapanormal(){


}