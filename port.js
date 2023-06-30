/*Criar a função que está sendo chamada no form para
validação:
1) Palavra function + nome da função + () -> sem parâmetros
2) Abra a função -> {}
3) Obtenção dos valores(criar variaveis) dos campos inseridos
pelo usuário:
4)Impedir o envio do form, caso o usuário deixe algum campo
vazio...(if)*/

function validar(){
  //Obtenção de valores inseridos pelo usuário
  //nos campos do form
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var msg = document.getElementById('msg').value

  //Validação dos campos do form
  if(nome == ''){
      alert('Por favor, digite seu nome');
      return false; //Impede o envio do formulário
  }
  if(email == ''){
      alert('Por favor, digite seu e-mail');
      return false; //Impede o envio do formulário
  }
  if(msg == ''){
      alert('Por favor, digite sua mensagem');
      return false; //Impede o envio do formulário
  }
  //Gravar os cookies codificados
  document.cookie = `nome=${encodeURIComponent(nome)}`;
  document.cookie = `email=${encodeURIComponent(email)}`;
  document.cookie = `msg=${encodeURIComponent(msg)}`;

  //Enviar o form validado
  return true;
}

