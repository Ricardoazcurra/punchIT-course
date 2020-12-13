const generateArray = () => {
    const array = new Array;
    let numeroTeclado;
    while (numeroTeclado != '') {
       numeroTeclado=prompt("Ingrese un número entero, Si para finalizar deje vacio y aprete enter");
        array.push(numeroTeclado);
    }
    array.pop();
    return array;
}

const devolucion = (array1,array2) => {
    const resultado = [];
    if (array1.length > array2.length) {
        for (numero of array1) {
            array2.includes(numero)? null : resultado.push(numero);
        }    
    }else {
        for (numero of array2) {
            array1.includes(numero)? null : resultado.push(numero);
        }
    }
    
    return resultado;
    
   
}