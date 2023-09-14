//funcion comun
function saludar( xyz ){ //recibo argumente xyz, lo que sea que mandemos con primer argumento en console.log sea reconocido como xyz
    // return 'Hola mundo' //Se puede hacer de esta manera
    return 'Hola ' + xyz // o de esta manera 
}

//funcion const
const saludar1 = function( xyz ){
    return `Hola ${ xyz }`
}

//funcion flecha
const saludar2 = (xyz) => `Hola ${ xyz }`


const nombre = 'Tony' 

console.log( saludar(nombre) )
console.log( saludar1(nombre) )
console.log( saludar2(nombre) )


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Tony001'
    }
}

console.log( getUser() ) 

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id:2,
    name: 'Superman'
}]

const heroe = heroes.some ( (heroe) => heroe.id === 1 ); //me devuelve true o false, con el metodo some vemos si la condicion que le indicamos comple o no

const { name } = heroes.find ( (heroe) => heroe.id === 1 );  //con el metodo find busca en el array hasta encontrar el name que corresponde al id que le indico y me devuelve el valor, en este caso, de name

console.log(heroe)
console.log(name)