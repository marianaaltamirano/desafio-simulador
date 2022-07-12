// Calcular el promedio de notas de los alumnos y mostrar condición

for (let i = 1; i <= 3; i++) {
    
    let alumno = prompt("Ingrese alumno");
    let nota1 = parseInt(prompt("Ingrese nota 1"));
    let nota2 = parseInt(prompt("Ingrese nota 2"));

    const promedio = (nota1, nota2) => (nota1 + nota2) / 2;

    let resultado = promedio(nota1, nota2);
    // let resultado = promedio(4,6);
    // let resultado = promedio(3, 2);

    if (resultado >= 7) {
        console.log(alumno);
        console.log(resultado);
        console.log("Promocionado");
    }
    else if (resultado >= 4 && resultado <= 6) {
        console.log(alumno);
        console.log(resultado);
        console.log("Regularizado");
    }
    else {
        console.log(alumno);
        console.log(resultado);
        console.log("Libre");
    }
}

alert("Ingreso finalizado");