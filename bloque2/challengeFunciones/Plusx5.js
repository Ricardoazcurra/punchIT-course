// creamos una funcion que me genere los 5 números 
const fiveNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(parseInt(prompt(`Ingrese 5 números (${i+1})`)));
    }
    return numbers;
}
const sumaNumber = (numbers) => {
    let sumaNumbers=0;
    for (number of numbers) {
        sumaNumbers = sumaNumbers + number;
    }
    return sumaNumbers;
}