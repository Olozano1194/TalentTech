

//ejercicio 18
function LetrasPalabra(palabra) {
    for (let i = 0; i < palabra.length; i++) {
        const element = palabra[i];
        console.log(element);

        
        
    }
    
}
LetrasPalabra('caso');

console.log('ejercicio 19 ----------');

function PalabraMayuscula(palabra) {
    let mayuscula = '';
    for (let i = 0; i < palabra.length; i++) {
        mayuscula += palabra[i].toUpperCase();
        
    }
    console.log(mayuscula);
    

    
}

//PalabraMayuscula('palabra');

//ejericio 1 numero del 1 al 10 ascendente
for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}
console.log('-----------------');


//ejercicio 2 numeros del 1 al 10 descentende
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log('ejercicio 3--------------');


//ejercicio 3 numeros pares
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log('ejercicio 4---------------');


//ejercicio 4 numeros impares al 19
for (let i = 0; i <= 19; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
console.log('ejercicio 5----------------');

//ejercicio 5 tabla de multiplicar 5
for (let i = 0; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}
console.log('ejercicio 6--------------');

//ejercicio 6 imprimir los primeros 10 numeros cuadrados
for (let i = 1; i <= 10; i++) {
    const cuadrado = i ** 2;
    console.log(`${i} * ${i}= ${cuadrado}`);
}

console.log('ejercicio 7 ---------------');
//ejercicio 7 imprimir los numeros del 1 al 10 y su doble
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * 2 = ${i * 2}`);
}

console.log('ejercicio 8 ---------------');
//imprime los primeros 10 numeros en forma de lista
let numeros = [];
for (let i = 1; i <= 10; i++) {
    numeros.push(i);    
}
console.log(numeros);

console.log('ejercicio 9 ------------');
//suma de los primeros 10 numeros
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i ;
   
}
console.log(suma);

console.log('ejercicio 10 --------');
//imprimir 10 asteriscos en una linea de codigo
let resultado = '';
for (let i = 1; i <= 10; i++) {
    resultado += '*';    
}
console.log(resultado);

console.log('ejercicio 11 -----------');
//Imprimir los elementos de un array
let numbers = [1,2,3,4,5,6];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    
}
console.log('ejericio 12 -------------------');
//suma de los elementos de un array
let sumaArray = 0;
let element = [1,2,3,6,9,7,10,34];
for (let i = 0; i < element.length; i++) {
    sumaArray += element[i];
       
}
console.log(sumaArray);
console.log('ejercicio 13 --------------');
//numero más grande de un array?
array = [1,2,3,6,10,30];
contador = array[0];
for (let i = 0; i <= array.length; i++) {
    if (array[i] > contador) {
        contador = array[i];
        
    }
}
console.log(contador);

console.log('ejercicio 14 -------------');
//cuantos numeros en el array son mayores que 10
array = [1,2,3,6,10,30,11];
contador = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
        contador++;
    }
    
}
console.log('La cantidad de numeros mayores que 10 son:', contador);

console.log('ejercicio 15 ---------');
//imprimir los numeros del 1 al 100, pero solo los multiples de 3
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

console.log('ejercicio 16 ------------');
//imprimir los numeros del array en orden inverso
array = [5,2,10,0];
for (let i = 0; i < array.length; i++) {
    console.log(array[array.length - i - 1]);
    
}

console.log('ejercicio 17 ------------');
//imprimir los 10 primeros numeros fibonacci

console.log('ejercicio 20 -------------');
//imprime un patron de pirámide con asteriscos?
function piramide(n) {
    for (let i = 1; i <= n; i++) {
        let asteriscos = '';
        for (let j = 1; j <= n - i; j++) {
            asteriscos += ' ';
        }
        for (let k = 1; k <= (i*2) - 1; k++) {
            asteriscos += '*';         
            
        }
        console.log(asteriscos);
    }
    
}
piramide(5);

console.log('ejercicio 21 ----------------');
//verificación de un array contiene un número en especifico, si el No existe 'Encontrado'
    // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let number = 5;
    // for (let i = 0; i <= array.length; i++) {
    //     if (array[i] === number) {
    //         console.log('Encontrado');
                
    //     }else {
    //         console.log('No encontrado');
                   
    //     }
    // }
    



console.log('ejercicio 22 --------------');
//imprimir los numeros del array, pero solo los impares
array = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
}

console.log('ejercicio 23 ----------');
//calcular el promedio de un array de numeros
let sumaArray2 = 0;
let elementProm = [1,2,3,6,9,7,10,34];
for (let i = 0; i < elementProm.length; i++) {
    sumaArray2 += elementProm[i];
       
}
console.log(sumaArray2 / elementProm.length);



console.log('ejercicio 24 ---------------');
//cuantos elementos del array son string
let arrayString = ['hola', 'adios', 1, 2, 3, 'chau', 'hola mundo', 5, 6, 7, 8];
let count = 0;
for (let i = 0; i < arrayString.length; i++) {
    if (typeof arrayString[i] === 'string') {
        count++;
    }
}
console.log(count);


console.log('ejercicio 25 -------------');
//concatenar los elementos del array de string, separado por comas


console.log('ejercicio 26 --------------');
//imprimir una piramide invertida?
function piramideInver(n) {
    for (let i = n; i >= 1; i--) {
        let asteriscos = '';
        for (let j = 1; j <= n - i; j++) {
            asteriscos += ' ';
        }
        for (let k = 1; k <= (i*2) -1; k++) {
            asteriscos += '*';         
            
        }
        console.log(asteriscos);
    }
    
}
piramideInver(5);

console.log('ejercicio 27 ------------');
//convertir un array de string a numeros

console.log('ejercicio 28 -----------');
//filtrar los numeros a 50 en el array

console.log('ejercicio 29 -------------');
//ordenar el array de numeros de mayor a menor


console.log('ejercicio 30 ----------------');
//escribir una matriz trasnpuesta ejemplo : let matriz = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
//Matriz Transpuesta: 1 4 7 - 2 5 8 - 3 6 9

console.log('ejercicio 31 ---------------');
//verificar si el array es palindromo

console.log('ejericio 32 --------------');
//encontrar el segundo numero más grande del array

console.log('ejercicio 33 ------------------');
//Imprimir los factores de un numero dado

console.log('ejericio 34 -------------');
//calcular el factorial de un numero

console.log('ejercicio 35 ------------');
//crea un patrón de triangulo de numeros

console.log('ejercicio 36 ------------');
//almacenar los numeros primos de 1 al 100




















    








