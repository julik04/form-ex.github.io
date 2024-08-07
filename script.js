function validateForm(){
    const name = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');

    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(!regexPassword.test(password)){
        errorMessage.innerHTML = 'Пароль должен содержать минимум 6 символов, одну заглавную и одну строчную буквы и цифру';
        return false;
    }
    errorMessage.innerHTML = '';
    alert('Данные отправлены');
    return true;
}

