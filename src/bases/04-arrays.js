const arreglo = [1, 2, 3, 4]
arreglo.push( 5 ) //Metodo para agregar un nuevo numero

const arreglo2 = [...arreglo]

arreglo2.push( 6 )

const arreglo3 = arreglo2.map( function ( num ) {
    return num * 2
})



console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
