/*Crear un programa en Javascript que realice lo siguiente:
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.*/

const prompt = require('prompt-sync')();
//1.Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables. Se convierten a N°
const num1 = Number(prompt("Escribe un número : "));
const num2 = Number(prompt("Escribe un segundo número : "));
const num3 = Number(prompt("Escribe un tercer número: "));

//2.Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
if (num1 === num2 && num2 === num3){
    console.log("Todos los números son iguales.");
    }
    else{
        const menorAMayor = [num1,num2,num3].sort((a,b) => a-b);  //ordenar < a >
        const mayorAMenor = [...menorAMayor].reverse();

        const menor = menorAMayor[0];
        const medio = menorAMayor[1];
        const mayor = menorAMayor[2];

        console.log("\n--- RESULTADOS ---");
        console.log(`Número menor: ${menor}`);
        console.log(`Número del medio: ${medio}`);
        console.log(`Número mayor: ${mayor}`);

        console.log("\n Ordenados de mayor a menor:", mayorAMenor.join(", "));
        console.log("Ordenados de menor a mayor:", menorAMayor.join(", "));


    }


/*mostrar resultados
console.log(`numero menor :  ${menor}`);
console.log(`numero del  medio :  ${medio}`);
console.log(`numero mayor :  ${mayor}`);*/




