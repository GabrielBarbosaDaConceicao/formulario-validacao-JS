const form = document.getElementById('form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const passworInput = document.querySelector('#password')
const jodSelect = document.querySelector('#job')
const messageTextarea = document.querySelector('#message')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }

    // verifica se o email esta vazio e se é valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email")
        return;
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o foemulario
    if(!validatePassword(passworInput.value, 8)){
        alert("A senha precisa ter no minimo 8 digitos")
        return;
    }

    // verificar se a situação foi selecionada
    if(jodSelect.value === "") {
        
        alert("Por favor, selecione a sua situação")
        return;
    }

    //  verifica se a mensagem está preenchda
    if(messageTextarea.value === ""){
    alert("Preencha ou escreva uma mensagem")
}

    form.submit();
});

function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}


// fução que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits){
        // senha valida
        return true;
    }

    // senha invalida
    return false;
}