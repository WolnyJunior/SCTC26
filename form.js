function validadeForm() {

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    // const idade = document.getElementById("idade").value
    // const tel = document.getElementById("tel").value
    const message = document.getElementById("message").value

    if (name === '' || email === '' || message === '') {
        alert('Todos os campos são obrigatórios')
        return false
    }

    if (name.length < 3 || name.length > 50) {
        alert('O nome deve ter entre 3 e 50 caracteres.')
        return false
    }

    if (email.length < 5 || email.length > 30) {
        alert("Email deve conter entre 10 e 30")
        return false
    }

    const emailPatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailPatern.test(email)) {
        alert("Endereço de e-mail incorreto")
        return false
    }
    return true
}

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault()
    if (validadeForm()) {
        alert("Formulário validado.")
    }
})
