document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');

    var isValid = true;

    // Verificar se o nome contém caracteres especiais
    if (/[^a-zA-Z0-9]/.test(name.value)) {
        name.nextElementSibling.innerHTML = 'O nome não deve conter caracteres especiais.';
        name.nextElementSibling.style.color = 'red';
        isValid = false;
    } else {
        name.nextElementSibling.innerHTML = '';
    }

    // Verificar se o email termina com @escolar.ifrn.edu.br
    if (!email.value.endsWith('@escolar.ifrn.edu.br')) {
        email.nextElementSibling.innerHTML = 'O email deve terminar com @escolar.ifrn.edu.br.';
        email.nextElementSibling.style.color = 'red';
        isValid = false;
    } else {
        email.nextElementSibling.innerHTML = '';
    }

    // Verificar se o assunto contém caracteres especiais
    if (/[^a-zA-Z0-9]/.test(subject.value)) {
        subject.nextElementSibling.innerHTML = 'O assunto não deve conter caracteres especiais.';
        subject.nextElementSibling.style.color = 'red';
        isValid = false;
    } else {
        subject.nextElementSibling.innerHTML = '';
    }

    // Se todos os campos são válidos, recarregar a página
    if (isValid) {
        window.location.reload();
    }
});
