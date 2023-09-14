const nombre= 'Martu'
const apellido= 'Acosta'


if (true){
    const nombre = 'Pepe'
    console.log(nombre) // Muestra const declarada adentro del scope
}

if(true){
    console.log(nombre) //Muestra const declarada fuera de scope, ya que no tiene declarada ninguna adentro busca la const nombre declarada afuera
}

console.log(nombre, apellido) //Muestra const declaradas fuera de scope



let nombre2 = 'Tony'

if (true) {
    nombre2 = 'Patricio'
}

console.log(nombre2) //En este caso va a mostrar Patricio, ya se el valor de let fue modificado, siempre trae el ultimo valor.

