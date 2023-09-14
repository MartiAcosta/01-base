// importaciones y exportaciones
//EXPORTAR FUNCIONES

import heroes from '../data/heroes'
// const [dc, marvel] = owners;

// console.log(dc)
// console.log(marvel)
// console.log(heroes) //arreglo de heroes

// getHeroById (id)
// funciones de flecha
//find

export const getHeroeById = (id) => heroes.find( heroe => heroe.id === id)
// console.log(getHeroById(2))// SOLO ME VA A TRAER EL OBJETO DEL ARRAY QUE TENGA EL ID 2

export const getHeroesByOwner = (owners) => heroes.filter( e => e.owner == owners)
// console.log(getHeroesByOwner('DC'))// ME TRAE TODOS LOS OBJETOS DEL ARRAY QUE TENGA 'DC'
//getHeroesByOwner ( 'DC', 'Marvel')



//importacion de getHeroeById, getHeroesByOwner desde otro componente
// import { getHeroeById, getHeroesByOwner } from "./bases/08-imp-exp";

// console.log( getHeroeById(2) ) 

// console.log(getHeroesByOwner('DC'))