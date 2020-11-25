
//removemos los elementos repetidos
const removerDuplicados = (array) => {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
       !newArray.includes(array[index]) ? newArray.push(array[index]) : null; 
    }

    return newArray;
}

const revertirMensaje = (mensaje) => {
    const string = mensaje.split("");
    const reverse = string.reverse();
    const mensajeFinal = reverse.join("");
    return mensajeFinal;
}