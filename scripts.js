document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username && password) {
            // Здесь можно обработать входные данные и отправить их на сервер
            
            alert(`Добро пожаловать, ${username}`); // Пример вывода сообщения
        } else {
            alert('Пожалуйста, введите имя пользователя и пароль');
        }
    });
});