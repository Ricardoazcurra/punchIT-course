const generarString = () => {
    const string = prompt("Ingrese su texto");
    return string;
}
const qspacios = (text) => {
    const caracteres = text.split(" ");
    const canitdadSpacio = caracteres.length -1;
    return canitdadSpacio;
}