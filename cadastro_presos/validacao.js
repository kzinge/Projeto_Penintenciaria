window.onload = function() {
    var form = document.getElementById('meuFormulario');
    form.addEventListener('submit', function(event) {
        var inputs = form.querySelectorAll('input[type="text"]');
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            var errorSpan = input.parentNode.querySelector('span');
            if (!errorSpan) {
                errorSpan = document.createElement('span');
                errorSpan.style.fontFamily = 'Arial';
                errorSpan.style.fontSize = '13px';
                errorSpan.style.color = 'red';
                input.parentNode.appendChild(errorSpan);
            }
            if (input.value.match(/[^a-zA-Z0-9 ]/g)) {
                errorSpan.textContent = 'Por favor, não insira caracteres especiais.';
                event.preventDefault();
            } else {
                errorSpan.textContent = '';
            }
        }
    });
};
