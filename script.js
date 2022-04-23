alert('Bem-vindo! Informe seus dados, por favor.')

const nome = prompt('Qual seu nome? ')
let data = prompt('Qual sua data de nascimento? ')
let dataConfirmation = confirm('Sua data de nascimento é: ' + data)
alert(
  'Nome: ' +
    nome +
    '\nNascimento: ' +
    data +
    '\nConfirmação da data: ' +
    dataConfirmation
)
