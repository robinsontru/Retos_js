// // contador de 1 a 50
// setTimeout(() => {
//     for (let i = 0; i < 1; i++) {
//         alert(i)
//         localStorage.setItem('contador', 'el contador ha terminado')
//     }
// }, 2000);

// //de nemor a mayor
// var numbers = [1, 2, 3, 1, -2, -6, -3, 4, 4, 2, 1, 1, 45]
// numbers.sort();
// console.log(numbers);
// alert(numbers + 'de menor a mayor ')


// //numero  pares
// var array = [1, 2, 3, 1, -2, -6, -3, 4, 4, 2, 1, 1, 45]
// for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     if (array[i] % 2 == 0) {
//         console.log('el numero  es par');
//         console.log(array[i]);
//     }
// }

// //buscar letras
// var letras = 3
// var array = ['a', 'la', 'ola', 'hola']
// for (let index = 1; index < array.length; index++) {
//     const element = array[letras][index];
//     console.log(element, 'la letra ');

// }


// //numero mayor 
// const matriz = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var mayor
// console.log(Math.max(...matriz));


// //asterisocos 
// holas = 5
// var resultado = "*";
// for (let i = 0; i <= holas; ++i) {
//     resultado += "*";
//     console.log(resultado);
// }

// //herores 
// var heroes = {
//     capi: {
//         nombre: 'capitan america',
//         poder: 'agunta inyeciones sin morir'
//     },
//     iron: {
//         nombre: 'iromnam',
//         poder: 'tener mucho dinero'
//     },
//     spider: {
//         nombre: 'spiderman',
//         poder: 'picadura letal'
//     }
// }
// const buscarHeroe = (id) => {
//     return new Promise((res, req) => {

//         const heroe = heroes[id];

//         if (heroe) {
//             res(heroe);
//         } else {
//             req(`No existe heroe con id ${id}`);
//         }

//     });

// }

// Promise.all([buscarHeroe("capi"), buscarHeroe('spider'), buscarHeroe('iron')]).then(heroe => {
//     buscarHeroe("spider").then(buscarHeroe => {
//         console.log(`el heroe ${buscarHeroe}  van a la mision`);
//     })
//     console.log(heroe);
// }).catch(err => {
//     console.log(err);
// })

// /// orden de menor a mayor y orden de letrar
var array = [1, 2, 3, 4, 5, 6]
var array1 = ['e', 'a', 'c', 'u', 'y']
array.reverse()
console.log(array);
array1.sort()
console.log(array1);
var num=[1, 2, 3, 1, -2, -6, -3, 4, 4, 2, 1, 1, 45]
const  numero = new Set(num);
let reusltado =[...numero]
console.log(reusltado);


// array.reverse()
// console.log(array);
// localStorage.setItem('numeros de mayor a menor', JSON.stringify(array))
// array1.sort()
// console.log(array1);
// localStorage.setItem('vocales orden ', JSON.stringify(array1))


// let miArreglo =[1, 2, 3, 1, -2, -6, -3, 4, 4, 2, 1, 1, 45]

// let arregloSinRepetidos = miArreglo.filter(function (
//   elemento,
//   indice,
//   arreglo
// ) {
//   return arreglo.indexOf(elemento) === indice;
// });

// console.log(arregloSinRepetidos); // [1, 2, 3, 4, 5]



