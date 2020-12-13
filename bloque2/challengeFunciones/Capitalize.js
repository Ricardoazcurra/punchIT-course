const generarString = () => {
    const string = prompt("Ingrese su texto");
    return string;
}

const capitalize = (texto) => {
    let palabras = texto.split("");
    const textoFinal = [];
    for (let i= 0; i < palabras.length; i++) {
        if (i == 0 || palabras[i - 1] == ' ') {
           textoFinal.push(palabras[i].toUpperCase());
        }else{
            textoFinal.push(palabras[i]);
        }
        
    }
    return textoFinal.join("");
}