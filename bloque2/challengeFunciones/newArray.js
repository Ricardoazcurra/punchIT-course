const generateArray = () => {
    const array = [];
    let ingresoTeclado;
    while (ingresoTeclado != '') {
        ingresoTeclado= prompt("Ingrese una letra o número, si desea terminar deje vacio y aprete enter");
        array.push(ingresoTeclado);
    }
    array.pop();
    return array;
}
const newArray = (array1, array2) => { 
    const arrayRetorno = array1.concat(array2);
    return arrayRetorno;
}