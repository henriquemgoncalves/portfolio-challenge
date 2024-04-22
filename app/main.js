function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;
    var isValid = true;

    if (nome === "") {
        document.getElementById("nomeError").innerText = "Por favor, insira seu Nome.";
        isValid = false;
    } else {
        document.getElementById("nomeError").innerText = "";
    }


    if (email === "") {
        document.getElementById("emailError").innerText = "Por favor, insira seu E-mail.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }


    if (assunto === "") {
        document.getElementById("assuntoError").innerText = "Por favor, insira o Assunto.";
        isValid = false;
    } else {
        document.getElementById("assuntoError").innerText = "";
    }


    if (mensagem === "") {
        document.getElementById("mensagemError").innerText = "Por favor, insira a Mensagem.";
        isValid = false;
    } else {
        document.getElementById("mensagemError").innerText = "";
    }

    if (isValid) {
        showAlert(nome, email, assunto, mensagem);
    }

    return isValid;
}

function showAlert(nome, email, assunto, mensagem) {
    var alertMessage = "Nome: " + nome + "\n";
    alertMessage += "E-mail: " + email + "\n";
    alertMessage += "Assunto: " + assunto + "\n";
    alertMessage += "Mensagem: " + mensagem + "\n";

    alert(alertMessage);
}