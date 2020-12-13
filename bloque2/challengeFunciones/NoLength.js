const generarString = () => {
    const string = prompt("Ingrese su texto");
    return string;
}

const maxCaracteres = (texto) => {
    let cantidad = 0;
    const caracteres = texto.split("");
    for (caracter of caracteres) {
        cantidad +=1;
    }
    return cantidad;
}