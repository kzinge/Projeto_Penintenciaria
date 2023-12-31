window.onload = function() {
  document.getElementById("meuFormulario").addEventListener("submit", function(event){
    var senha = document.getElementById("password").value;
    var usuario = document.getElementById("user").value;
    var regexSenha = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    var regexUsuario = /^[A-Za-z\d]{1,}$/; // Usuário válido: apenas letras e números

    if (!regexSenha.test(senha)) {
      document.getElementById("erroSenha").textContent = "A senha deve ter mais de 8 caracteres e pelo menos 1 caractere especial!";
      document.getElementById("erroSenha").style.color = "green";
      document.getElementById("erroSenha").style.fontFamily = "Arial";
      event.preventDefault();
    } else {
      document.getElementById("erroSenha").textContent = "";
    }

    if (!regexUsuario.test(usuario)) {
      document.getElementById("erroUsuario").textContent = "O nome do usuário deve conter apenas letras e números!";
      document.getElementById("erroUsuario").style.color = "darkcyan";
      document.getElementById("erroUsuario").style.fontFamily = "Arial";
      document.getElementById("erroUsuario").style.fontSize = "13px";
      document.getElementById("erroSenha").textContent = "A senha tem que conter mais de 8 caracter e pelo menos1 cacter especial!";
      document.getElementById("erroSenha").style.color = "darkcyan";
      document.getElementById("erroSenha").style.fontFamily = "Arial";
      document.getElementById("erroSenha").style.fontSize = "13px"
      event.preventDefault();
    } else {
      document.getElementById("erroUsuario").textContent = "";
    }
  });
        }
