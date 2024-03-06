function procesar() {
    var texto = document.getElementById('texto').value;
    var opcion = document.getElementById('opcion').value;

    var resultado = '';

    if (opcion === 'encriptar') {
        resultado = encriptar(texto);
    } else if (opcion === 'desencriptar') {
        resultado = desencriptar(texto);
    }

    document.getElementById('resultado').value = resultado;
}

function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

function copiarResultado() {
    var resultado = document.getElementById('resultado');
    
    // Selecciona el contenido del textarea
    resultado.select();
    resultado.setSelectionRange(0, 99999);

    // Copia el contenido al portapapeles
    document.execCommand('copy');
    alert('¡Texto copiado!');
}
