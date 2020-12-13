// generamos el abecedario
const abecedario = () => {
    const alfabeto = "abcdefghijklmnñopqrstuvwxyz";
    const arrayAlafabeto = alfabeto.split("");
    return arrayAlafabeto;
}
//convertimos todas las palabras a minuscula
const mensajeUsuario = (mensaje) => {
    const newMensaje = mensaje.toLowerCase();
    return newMensaje;
}
//metodo que encripta los datos 
const encriptacion = (mensaje,desplazamiento = 3) => {
    const abecdrio = abecedario();
   
    const tamaño = abecdrio.length;

    const msjUsuario = mensajeUsuario(mensaje);
   
    const msjOuput = [];
    

    for (let i = 0; i < msjUsuario.length; i++) {
        //dado la letra que recorremos en msjUsuario la buscamos en abcedrio
        let index = abecdrio.findIndex((e) => e === msjUsuario[i]);
        //en caso que sea diferente de un espacio o otro caracter
        if (index != -1) {
            let posicionDesplazar = index + desplazamiento;
            //comprobamos que si el indice es mayo al tamño del abecedario debemos restar asi nos da la posicion correcta
            posicionDesplazar >= tamaño ? msjOuput.push(abecdrio[posicionDesplazar - tamaño]) : msjOuput.push(abecdrio[posicionDesplazar]);
        }else{
            //si es un espacio o otro caracter que no sea una letra del abecedario la pusheamos
            msjOuput.push(msjUsuario[i]);
        }
    }
    
    return msjOuput.join("");
}