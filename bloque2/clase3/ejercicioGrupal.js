const reversoMensaje = (mensaje) => {
    const newMensaje = [];
    for (let i = mensaje.length -1; i >= 0; i--) {
        newMensaje.push(mensaje[i]);   
    }
    const mensajeFinal = newMensaje.join("");
    
    return mensajeFinal;
}

const ingresoAlumnoNota = () => {
    const alumnos=[];
    const notas= [];
    for (let i = 0; i < 3; i++) {
        alumnos.push(prompt("Ingrese el nombre del alumno"));
        notas.push(parseInt(prompt("Ingrese la nota del alumno " + alumnos[i])));
    }
    sacarNotas(notas,alumnos);
}

const sacarNotas = (notas, alumnos) => {
    let notaMayor= 0;
    let notaMenor = 10;
    let sumaNotas = 0;
    const alumnoMayorNota=[];
    const alumnoNotaMenor = [];
    // determinamos la mayor y menor nota a su vez sumamos todas para el promedio
    notas.forEach(element => {
        element > notaMayor ? notaMayor = element : null;
        element < notaMenor ? notaMenor = element : null;
        sumaNotas = sumaNotas + element;
    });
    // dada la nota mayor y menor determinamos a que alumno le pertenece
    for (let i = 0; i < notas.length; i++) {
        notas[i] === notaMayor ? alumnoMayorNota.push(alumnos[i]) : null;
        notas[i] === notaMenor ? alumnoNotaMenor.push(alumnos[i]) : null;   
    }

    //sacamos el promedio
    const promedio = sumaNotas / notas.length;
    
    document.write("El alumno con la mayor nota es " + alumnoMayorNota + "<br>");

    document.write("El alumno con la menor nota es " + alumnoNotaMenor + "<br>");

    document.write("El promedio de las tres notas es " + promedio + "<br>");
}