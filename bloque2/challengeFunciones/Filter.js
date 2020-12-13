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

const devolucion = (array1) => {
    const resultado = [];

    for (numero of array1) {
        resultado.includes(numero)? null : resultado.push(numero);
    }    
   
    
    return resultado;
    
   
}