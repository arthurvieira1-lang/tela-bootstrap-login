let cadastro = false;

document.getElementById("toggle").onclick = () => {

    cadastro = !cadastro;

    document.getElementById("titulo").innerText = cadastro
        ? "Cadastro"
        : "Login";

    document.querySelector("button").innerText = cadastro
        ? "Cadastrar"
        : "Entrar";

    document.getElementById("toggle").innerText = cadastro
        ? "Já tem conta? Faça Login!"
        : "Não tem conta? Cadastre-se!";

    document.getElementById("mensagem").innerHTML = "";

}

document.getElementById("form-login").onsubmit = (e) => {

    e.preventDefault();

    let email = document.getElementById("email").value;

    let senha = document.getElementById("senha").value;

    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if (!email.includes("@") || !email.includes(".")) {

        mensagem.innerHTML =
            "<div class='alert alert-danger mt-3'>Email inválido!</div>";

        return;
    }

    if (senha.length < 4) {

        mensagem.innerHTML =
            "<div class='alert alert-danger mt-3'>Senha muito curta!</div>";

        return;
    }

    if (cadastro) {

        localStorage.setItem(email, senha);

        mensagem.innerHTML =
            "<div class='alert alert-success mt-3'>Cadastro realizado!</div>";

    } else {

        let salva = localStorage.getItem(email);

        if (salva === senha) {

            mensagem.innerHTML =
                "<div class='alert alert-success mt-3'>Login realizado!</div>";

        } else {

            mensagem.innerHTML =
                "<div class='alert alert-danger mt-3'>Dados incorretos!</div>";

        }

    }

    document.getElementById("form-login").reset();

}