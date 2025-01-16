const loginButton = document.getElementById('loginButton');
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById('loginForm');
const registerbutton = document.getElementById("registerButton")
const email1 = document.getElementById("email1")
const password1 = document.getElementById("password1")
const form1 = document.getElementById("registerForm")

// Функция для сброса ошибок
function clearErrors() {
    email.style.borderColor = "";
    password.style.borderColor = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
}

loginButton.addEventListener('click', function () {
    clearErrors(); // Сброс стилей и сообщений перед проверкой

    let valid = true; // Флаг для проверки успешности валидации

    // Проверяем, заполнено ли поле email
    if (!email.value.trim()) {
        email.style.border = "2px solid #ff007f";
        document.getElementById("emailError").textContent = "Введите email.";
        valid = false;
    }


    if (!password.value.trim()) {
        password.style.border = "2px solid #ff007f";
        document.getElementById("passwordError").textContent = "Введите пароль.";
        valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Проверяем email на корректность
    if (email.value.trim() && !emailRegex.test(email.value)) {
        email.style.border = "2px solid #ff007f";

        document.getElementById("emailError").textContent = "Некорректный email.";
        valid = false;
    }


    if (!valid) {
        return;
    }

    form.submit();
});


registerbutton.addEventListener('click', function () {
    clearErrors(); // Сброс стилей и сообщений перед проверкой

    let valid = true; // Флаг для проверки успешности валидации

    // Проверяем, заполнено ли поле email
    if (!email1.value.trim()) {
        email1.style.border = "2px solid #ff007f";
        document.getElementById("emailError").textContent = "Введите email.";
        valid = false;
    }

    // Проверяем, заполнено ли поле password
    if (!password1.value.trim()) {
        password1.style.border = "2px solid #ff007f";
        document.getElementById("passwordError").textContent = "Введите пароль.";
        valid = false;
    }

    // Регулярное выражение для проверки email
    const email1Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Проверяем email на корректность
    if (email1.value.trim() && !email1Regex.test(email1.value)) {
        email1.style.border = "2px solid #ff007f";

        document.getElementById("emailError").textContent = "Некорректный email.";
        valid = false;
    }

    // Если есть ошибки, форма не отправляется
    if (!valid) {
        return;
    }

    // Если всё прошло успешно, отправляем форму
    form1.submit();
});