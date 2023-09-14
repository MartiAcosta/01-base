import { getHeroeById } from "./bases/08-imp-exp"

console.log('Inicio')

//Promesas
// new Promise( (resolve, reject) =>{   //resolve si esta todo ok, reject si pasa por algun error

//     console.log('cuerpo de la promesa')
//     resolve('Promesa resuelta')

// }).then(console.log )//el .then es cuando sale bien la promesa, y luego hace lo que le digo por parametro. Esto se ejecuta cuando se manda el resolve


// new Promise( (resolve, reject) =>{   //resolve si esta todo ok, reject si pasa por algun error

//     console.log('cuerpo de la promesa')
//     reject('Promesa resuelta con error')

// }).catch( console.log) //el .catch es cuando sale mal la promesa, y luego hace lo que le digo por parametro. Esto se ejecuta cuando se manda el reject



const getHeroesByAsync = (id) => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() =>
        {
            const hero = getHeroeById( id )

            if ( hero ){
            resolve( hero )
            }else{
                reject('Heroe no existe')
            }
        }, 1000)
    })
}

getHeroesByAsync(2).then( h =>{console.log(`El héroe es: ${h.name}`) })
                   .catch(console.log)

console.log('Fin')