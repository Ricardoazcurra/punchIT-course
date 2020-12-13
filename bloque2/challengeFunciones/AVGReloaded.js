// creamos una funcion que me genere los 3 números 
const threeNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 3; i++) {
        numbers.push(parseInt(prompt(`Ingrese 3 números (${i+1})`)));
    }
    return numbers;
}

const numberPromedio = (numbers) => {
    let sumaNumbers=0;
    for (number of numbers) {
        sumaNumbers = sumaNumbers + number;
    }
    const promedio = sumaNumbers / numbers.length;
    
    return promedio;
}