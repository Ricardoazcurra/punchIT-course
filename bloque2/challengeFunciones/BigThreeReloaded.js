// creamos una funcion que me genere los 3 números 
const threeNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 3; i++) {
        numbers.push(parseFloat(prompt(`Type 3 numbers (${i+1})`)));
    }
    return numbers;
}

const mayorNumber = (numbers) => {
    let max = 0;
    for(number of numbers){
        number > max ? max= number : null;
    }

    return max;
}