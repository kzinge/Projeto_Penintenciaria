function rotacionarString(str) {
    // Converter a string para um array de caracteres para facilitar a manipulação
    var arrayDeCaracteres = str.split('');

    // Remover o último caractere da string
    var ultimoCaractere = arrayDeCaracteres.pop();

    // Adicionar o último caractere ao início da string
    arrayDeCaracteres.unshift(ultimoCaractere);

    // Converter o array de volta para uma string
    var stringRotacionada = arrayDeCaracteres.join('');

    return stringRotacionada;
}

// String original
var minhaString = 'w3resource';

// Número de rotações desejadas
var numeroDeRotacoes = 10;

// Realizar as rotações
for (var i = 0; i < numeroDeRotacoes; i++) {
    miinhaString = rotacionarString(minhaString);
}

// Exibir a string rotacionada
console.log("String Rotacionada: " + miinhaString);